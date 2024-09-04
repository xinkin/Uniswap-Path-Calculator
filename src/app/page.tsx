'use client';
import { useState } from 'react';
import { ChainId } from '@uniswap/sdk-core';
// import { getSwapDetails } from './routeV2';
import { ethers } from 'ethers';
import { determineBetterPath } from './pathCalc';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://interface.gateway.uniswap.org',
  timeout: 40000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

const defaultApiBody = {
  tokenInChainId: 8453,
  tokenOutChainId: 8453,
  sendPortionEnabled: true,
  type: 'EXACT_INPUT',
  intent: 'quote',
  configs: [
    {
      enableUniversalRouter: true,
      protocols: ['V2'],
      routingType: 'CLASSIC',
      enableFeeOnTransferFeeFetching: true,
    },
  ],
  useUniswapX: false,
  slippageTolerance: '0.5',
};

// const DAI = '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
// const USDC = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';
// const LayerZero = '0x6985884C4392D348587B19cb9eAAf157F13271cd';

export default function Home() {
  const [tokenIn, setTokenIn] = useState(
    '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  );
  const [tokenOut, setTokenOut] = useState(
    '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
  );
  const [amount, setAmount] = useState(1e18); // 1 Eth

  const [betterPath, setBetterPath] = useState<string[]>();

  // const swapDetails = async () => {
  //   try {
  //     const { success, data } = await getSwapDetails(
  //       '0x6985884C4392D348587B19cb9eAAf157F13271cd',
  //       '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
  //       BigInt('1000000000000000000'),
  //     );
  //     if (success) {
  //       console.log(data);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  async function getBetterPath() {
    const provider = new ethers.JsonRpcProvider('https://mainnet.base.org');
    try {
      const { data } = await api.post('/v2/quote', {
        ...defaultApiBody,
        tokenIn: tokenIn,
        tokenOut: tokenOut,
        amount: amount.toString(),
      });

      const { path } = await determineBetterPath(
        provider,
        data,
        amount.toString(),
      );
      console.log('Better path:', path);
      setBetterPath(path);
    } catch (error) {
      console.error('Error determining better path:', error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-between p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Uniswap Interface</h1>
      <div className="mb-4">The chainId of mainnet is {ChainId.BASE}.</div>
      <div className="flex flex-col space-y-4 mb-4 w-full">
        <div className="flex flex-col">
          <label htmlFor="tokenIn" className="mb-1 font-semibold">
            Token In
          </label>
          <input
            id="tokenIn"
            type="text"
            value={tokenIn}
            onChange={(e) => setTokenIn(e.target.value)}
            placeholder="Token In Address"
            className="border p-2 rounded w-full text-sm overflow-x-auto"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="tokenOut" className="mb-1 font-semibold">
            Token Out
          </label>
          <input
            id="tokenOut"
            type="text"
            value={tokenOut}
            onChange={(e) => setTokenOut(e.target.value)}
            placeholder="Token Out Address"
            className="border p-2 rounded w-full text-sm overflow-x-auto"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-1 font-semibold">
            Amount (in wei)
          </label>
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Amount (in wei)"
            className="border p-2 rounded w-full"
          />
        </div>
      </div>
      <button
        onClick={getBetterPath}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Get Better Path
      </button>
      {betterPath && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Better Path</h2>
          <div className="flex flex-col space-y-2">
            {betterPath.map((token, index) => (
              <div key={index}>{token}</div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
