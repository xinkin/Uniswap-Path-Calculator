import {
  Token,
  WETH9,
  TradeType,
  ChainId,
  CurrencyAmount,
} from '@uniswap/sdk-core';
import { Route, Trade, Pair } from '@uniswap/v2-sdk';
import { ethers } from 'ethers';
import { erc20Abi } from 'viem';
import IUniswapV2Pair from '@uniswap/v2-core/build/IUniswapV2Pair.json';

async function getProvider() {
  return new ethers.JsonRpcProvider('https://mainnet.base.org');
}

async function fetchTokenData(tokenAddress: string) {
  const provider = await getProvider();
  const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, provider);
  const decimals = await tokenContract.decimals();
  return new Token(ChainId.BASE, tokenAddress, Number(decimals));
}

async function fetchPairData(tokenA: any, tokenB: any) {
  const provider = await getProvider();
  const pairAddress = Pair.getAddress(tokenA, tokenB);
  const pairContract = new ethers.Contract(
    pairAddress,
    IUniswapV2Pair.abi,
    provider,
  );
  const reserves = await pairContract.getReserves();
  const [reserve0, reserve1] = reserves;
  const tokens = [tokenA, tokenB];
  const [token0, token1] = tokens[0].sortsBefore(tokens[1])
    ? tokens
    : [tokens[1], tokens[0]];
  return new Pair(
    CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
    CurrencyAmount.fromRawAmount(token1, reserve1.toString()),
  );
}

async function generateSwapData(
  tokenInAddress: string,
  tokenOutAddress: string,
  amount: bigint,
): Promise<{
  path: string[];
  amounts: string;
  expectedOutputAmount: string;
  deadline: number;
}> {
  const tokenIn = await fetchTokenData(tokenInAddress);
  const tokenOut = await fetchTokenData(tokenOutAddress);
  const weth = WETH9[ChainId.BASE];

  if (!weth) {
    throw new Error('WETH9 not found for Base network');
  }

  let path: Token[];
  let pairs: Pair[];

  // Try direct pair first
  try {
    const directPair = await fetchPairData(tokenIn, tokenOut);
    path = [tokenIn, tokenOut];
    pairs = [directPair];
  } catch (error) {
    // If direct pair doesn't exist or has no liquidity, use WETH path
    console.log('No direct pair found, using WETH path');
    path = [tokenIn, weth, tokenOut];
    pairs = await Promise.all([
      fetchPairData(tokenIn, weth),
      fetchPairData(weth, tokenOut),
    ]);
  }

  console.log('Pairs:', pairs);
  console.log('Path:', path);

  // Create route
  const route = new Route(pairs, tokenIn, tokenOut);

  // Create trade
  const trade = new Trade(
    route,
    CurrencyAmount.fromRawAmount(tokenIn, amount.toString()),
    TradeType.EXACT_INPUT,
  );

  // Generate data for smart contract
  return {
    //Extracting token addresses from the Token objects
    path: trade.route.path.map((token) => token.address),
    amounts: trade.route.midPrice.toSignificant(6),
    expectedOutputAmount: trade.outputAmount.toExact(),
    deadline: Math.floor(Date.now() / 1000) + 60 * 20, // 20 minutes from now
  };
}

export async function getSwapDetails(
  tokenInAddress: string,
  tokenOutAddress: string,
  amount: bigint,
) {
  try {
    const swapData = await generateSwapData(
      tokenInAddress,
      tokenOutAddress,
      amount,
    );
    return { success: true, data: swapData };
  } catch (error: any) {
    console.error('Error generating swap data:', error);
    return { success: false, error: error.message };
  }
}
