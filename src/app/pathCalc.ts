import { ethers } from 'ethers';
import { routerAbi } from './routerAbi';

// Uniswap V2 Router address on Base network
const ROUTER_ADDRESS = '0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24';

function extractSplitRoute(apiResponse: any): {
  paths: string[][];
} {
  const routes = apiResponse.quote.route;
  const paths: string[][] = [];

  routes.forEach((route: any) => {
    const path: string[] = [];
    route.forEach((hop: any, hopIndex: number) => {
      if (hopIndex === 0 || hop.tokenIn.address !== path[path.length - 1]) {
        path.push(hop.tokenIn.address);
      }
      path.push(hop.tokenOut.address);
    });
    paths.push(path);
  });

  return { paths };
}

export async function determineBetterPath(
  provider: ethers.Provider,
  apiResponse: any,
  amountIn: string,
): Promise<{
  path: string[];
}> {
  const router = new ethers.Contract(ROUTER_ADDRESS, routerAbi, provider);

  const { paths } = extractSplitRoute(apiResponse);

  console.log('Paths:', paths);

  let betterPath: string[] = [];
  let maxAmountOut = '0';

  // Check each path using getAmountsOut
  for (const path of paths) {
    try {
      const amounts = await router.getAmountsOut(amountIn, path);
      const amountOut = amounts[amounts.length - 1].toString();

      console.log(`Path ${path.join(' -> ')}: ${amountOut}`);

      if (parseFloat(amountOut) > parseFloat(maxAmountOut)) {
        maxAmountOut = amountOut;
        betterPath = path;
      }
    } catch (error) {
      console.error(`Error checking path ${path.join(' -> ')}:`, error);
    }
  }

  if (betterPath.length === 0) {
    throw new Error('No valid path found');
  }

  return {
    path: betterPath,
  };
}
