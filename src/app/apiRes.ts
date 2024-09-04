export const apiRes = {
  routing: 'CLASSIC',
  quote: {
    methodParameters: {
      calldata:
        '0x24856bc300000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000208080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000fd3b01a86a7b6630b00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda02913000000000000000000000000420000000000000000000000000000000000000600000000000000000000000050c5725949a6f0c72e6c4a641f24049a917db0cb0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000017d2094f693e4a2c00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda0291300000000000000000000000050c5725949a6f0c72e6c4a641f24049a917db0cb',
      value: '0x00',
      to: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    },
    blockNumber: '19289235',
    amount: '1000000000000000000',
    amountDecimals: '1000000000000',
    quote: '295139683488112384411',
    quoteDecimals: '295.139683488112384411',
    quoteGasAdjusted: '295137486319473776572',
    quoteGasAdjustedDecimals: '295.137486319473776572',
    gasUseEstimateQuote: '2197168638607838',
    gasUseEstimateQuoteDecimals: '0.002197168638607838',
    gasUseEstimate: '320000',
    gasUseEstimateUSD: '0.002201',
    simulationStatus: 'UNATTEMPTED',
    simulationError: false,
    gasPriceWei: '2682292',
    route: [
      [
        {
          type: 'v2-pool',
          address: '0x88A43bbDF9D098eEC7bCEda4e2494615dfD9bB9C',
          tokenIn: {
            chainId: 8453,
            decimals: '6',
            address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
            symbol: 'USDC',
          },
          tokenOut: {
            chainId: 8453,
            decimals: '18',
            address: '0x4200000000000000000000000000000000000006',
            symbol: 'WETH',
          },
          reserve0: {
            token: {
              chainId: 8453,
              decimals: '18',
              address: '0x4200000000000000000000000000000000000006',
              symbol: 'WETH',
            },
            quotient: '434590906563504303651',
          },
          reserve1: {
            token: {
              chainId: 8453,
              decimals: '6',
              address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
              symbol: 'USDbC',
            },
            quotient: '1092524441936',
          },
          amountIn: '500000000000000000',
        },
        {
          type: 'v2-pool',
          address: '0xb2839134B8151964f19f6f3c7D59C70ae52852F5',
          tokenIn: {
            chainId: 8453,
            decimals: '18',
            address: '0x4200000000000000000000000000000000000006',
            symbol: 'WETH',
          },
          tokenOut: {
            chainId: 8453,
            decimals: '18',
            address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
            symbol: 'DAI',
          },
          reserve0: {
            token: {
              chainId: 8453,
              decimals: '18',
              address: '0x4200000000000000000000000000000000000006',
              symbol: 'WETH',
            },
            quotient: '117003307020060559',
          },
          reserve1: {
            token: {
              chainId: 8453,
              decimals: '18',
              address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
              symbol: 'DAI',
            },
            quotient: '293493889437714662001',
          },
          amountOut: '293414656620234776172',
        },
      ],
      [
        {
          type: 'v2-pool',
          address: '0x950847d1dd451B67a2fC1795C0C9a53Cf88E63A2',
          tokenIn: {
            chainId: 8453,
            decimals: '6',
            address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
            symbol: 'USDC',
          },
          tokenOut: {
            chainId: 8453,
            decimals: '18',
            address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
            symbol: 'DAI',
          },
          reserve0: {
            token: {
              chainId: 8453,
              decimals: '18',
              address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
              symbol: 'DAI',
            },
            quotient: '1725026867883555108',
          },
          reserve1: {
            token: {
              chainId: 8453,
              decimals: '6',
              address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
              symbol: 'USDC',
            },
            quotient: '1718532',
          },
          amountIn: '500000000000000000',
          amountOut: '1725026867877608239',
        },
      ],
    ],
    routeString:
      '[V2] 50.00% = USDC -- [0x88A43bbDF9D098eEC7bCEda4e2494615dfD9bB9C]WETH -- [0xb2839134B8151964f19f6f3c7D59C70ae52852F5]DAI, [V2] 50.00% = USDC -- [0x950847d1dd451B67a2fC1795C0C9a53Cf88E63A2]DAI',
    quoteId: '48ee0f36-70e1-409f-8129-8c1d6c68e7d1',
    hitsCachedRoutes: true,
    portionBips: 0,
    portionAmount: '0',
    portionAmountDecimals: '0',
    quoteGasAndPortionAdjusted: '295137486319473776572',
    quoteGasAndPortionAdjustedDecimals: '295.137486319473776572',
    requestId: 'cda4d90f-59e0-43e4-a5a8-68e23756f375',
    tradeType: 'EXACT_INPUT',
    slippage: 0.5,
  },
  requestId: 'cda4d90f-59e0-43e4-a5a8-68e23756f375',
  allQuotes: [
    {
      routing: 'CLASSIC',
      quote: {
        methodParameters: {
          calldata:
            '0x24856bc300000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000208080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000fd3b01a86a7b6630b00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda02913000000000000000000000000420000000000000000000000000000000000000600000000000000000000000050c5725949a6f0c72e6c4a641f24049a917db0cb0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000017d2094f693e4a2c00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda0291300000000000000000000000050c5725949a6f0c72e6c4a641f24049a917db0cb',
          value: '0x00',
          to: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        },
        blockNumber: '19289235',
        amount: '1000000000000000000',
        amountDecimals: '1000000000000',
        quote: '295139683488112384411',
        quoteDecimals: '295.139683488112384411',
        quoteGasAdjusted: '295137486319473776572',
        quoteGasAdjustedDecimals: '295.137486319473776572',
        gasUseEstimateQuote: '2197168638607838',
        gasUseEstimateQuoteDecimals: '0.002197168638607838',
        gasUseEstimate: '320000',
        gasUseEstimateUSD: '0.002201',
        simulationStatus: 'UNATTEMPTED',
        simulationError: false,
        gasPriceWei: '2682292',
        route: [
          [
            {
              type: 'v2-pool',
              address: '0x88A43bbDF9D098eEC7bCEda4e2494615dfD9bB9C',
              tokenIn: {
                chainId: 8453,
                decimals: '6',
                address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
                symbol: 'USDC',
              },
              tokenOut: {
                chainId: 8453,
                decimals: '18',
                address: '0x4200000000000000000000000000000000000006',
                symbol: 'WETH',
              },
              reserve0: {
                token: {
                  chainId: 8453,
                  decimals: '18',
                  address: '0x4200000000000000000000000000000000000006',
                  symbol: 'WETH',
                },
                quotient: '434590906563504303651',
              },
              reserve1: {
                token: {
                  chainId: 8453,
                  decimals: '6',
                  address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
                  symbol: 'USDbC',
                },
                quotient: '1092524441936',
              },
              amountIn: '500000000000000000',
            },
            {
              type: 'v2-pool',
              address: '0xb2839134B8151964f19f6f3c7D59C70ae52852F5',
              tokenIn: {
                chainId: 8453,
                decimals: '18',
                address: '0x4200000000000000000000000000000000000006',
                symbol: 'WETH',
              },
              tokenOut: {
                chainId: 8453,
                decimals: '18',
                address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
                symbol: 'DAI',
              },
              reserve0: {
                token: {
                  chainId: 8453,
                  decimals: '18',
                  address: '0x4200000000000000000000000000000000000006',
                  symbol: 'WETH',
                },
                quotient: '117003307020060559',
              },
              reserve1: {
                token: {
                  chainId: 8453,
                  decimals: '18',
                  address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
                  symbol: 'DAI',
                },
                quotient: '293493889437714662001',
              },
              amountOut: '293414656620234776172',
            },
          ],
          [
            {
              type: 'v2-pool',
              address: '0x950847d1dd451B67a2fC1795C0C9a53Cf88E63A2',
              tokenIn: {
                chainId: 8453,
                decimals: '6',
                address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
                symbol: 'USDC',
              },
              tokenOut: {
                chainId: 8453,
                decimals: '18',
                address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
                symbol: 'DAI',
              },
              reserve0: {
                token: {
                  chainId: 8453,
                  decimals: '18',
                  address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
                  symbol: 'DAI',
                },
                quotient: '1725026867883555108',
              },
              reserve1: {
                token: {
                  chainId: 8453,
                  decimals: '6',
                  address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
                  symbol: 'USDC',
                },
                quotient: '1718532',
              },
              amountIn: '500000000000000000',
              amountOut: '1725026867877608239',
            },
          ],
        ],
        routeString:
          '[V2] 50.00% = USDC -- [0x88A43bbDF9D098eEC7bCEda4e2494615dfD9bB9C]WETH -- [0xb2839134B8151964f19f6f3c7D59C70ae52852F5]DAI, [V2] 50.00% = USDC -- [0x950847d1dd451B67a2fC1795C0C9a53Cf88E63A2]DAI',
        quoteId: '48ee0f36-70e1-409f-8129-8c1d6c68e7d1',
        hitsCachedRoutes: true,
        portionBips: 0,
        portionAmount: '0',
        portionAmountDecimals: '0',
        quoteGasAndPortionAdjusted: '295137486319473776572',
        quoteGasAndPortionAdjustedDecimals: '295.137486319473776572',
        requestId: 'cda4d90f-59e0-43e4-a5a8-68e23756f375',
        tradeType: 'EXACT_INPUT',
        slippage: 0.5,
      },
    },
  ],
};
