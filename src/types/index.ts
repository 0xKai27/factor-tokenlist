import { Address } from 'viem';

export const ChainIdToNetwork: Record<number, string> = {
  42161: 'arbitrum',
  10: 'optimism',
  8453: 'base',
};

export enum ChainId {
  ARBITRUM_ONE = 42161,
  OPTIMISM = 10,
  BASE = 8453,
}

export interface TokenMetadata {
  address: Address;
  symbol: string;
  name: string;
  decimals: number;
}

export type PendleToken = {
  chainId: number;
  expiry: string;
  pt: TokenMetadata;
  yt: TokenMetadata;
  lp: TokenMetadata;
  underlyingAsset: TokenMetadata;
};

export enum BuildingBlock {
  UNKNOWN = 'UNKNOWN',
  FUND = 'FUND',
  DEPOSIT = 'DEPOSIT',
  FLASHLOAN = 'FLASHLOAN',
  LEND = 'LEND',
  BORROW = 'BORROW',
  SWAP = 'SWAP',
  REPAY = 'REPAY',
  STAKE = 'STAKE',
  UNSTAKE = 'UNSTAKE',
  WITHDRAW = 'WITHDRAW',
  REFUND = 'REFUND',
  CONDITIONAL = 'CONDITIONAL',
  AUTOMATION = 'AUTOMATION',
  YIELD = 'YIELD',
  PROVIDE_LIQUIDITY = 'PROVIDE_LIQUIDITY',
  REMOVE_LIQUIDITY = 'REMOVE_LIQUIDITY',
  COLLECT_FEE = 'COLLECT_FEE',
  CREATE_LP = 'CREATE_LP',
  CLAIM_REWARDS = 'CLAIM_REWARDS',
  ERC721 = 'ERC721',
}

export enum Protocols {
  AAVE = 'AAVE',
  BALANCER = 'BALANCER',
  CAMELOT = 'CAMELOT',
  COMPOUND = 'COMPOUND',
  GLP = 'GLP',
  GMX = 'GMX',
  GNS = 'GNS',
  MUX = 'MUX',
  OPENOCEAN = 'OPENOCEAN',
  PENDLE = 'PENDLE',
  PENPIE = 'PENPIE',
  PIREX = 'PIREX',
  SILO = 'SILO',
  UMAMI = 'UMAMI',
  UNISWAP = 'UNISWAP',
  VLP = 'VLP',
}

export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  protocols: Protocols[];
  buildingBlocks: BuildingBlock[];
  logoUrl?: string;
  blacklisted?: boolean;
}

export interface ExtendedPendleToken extends PendleToken {
  protocols: Protocols[];
  buildingBlocks: BuildingBlock[];
  address: string;
  symbol: string;
  blacklisted?: boolean;
}

export type SiloAsset = {
  underlyingAsset: TokenMetadata;
  debtToken: TokenMetadata;
  collateralToken: TokenMetadata;
  collateralOnlyToken: TokenMetadata;
};

export interface ExtendedSiloToken {
  marketName: string;
  marketAddress: string;
  asset: SiloAsset[];
  protocols: Protocols[];
  buildingBlocks: BuildingBlock[];
}

export interface AaveDebtToken {
  aToken: string;
  variableDebtToken: string;
  symbol: string;
  decimals: number;
  underlyingAddress: string;
  underlyingSymbol: string;
  protocols: Protocols[];
  buildingBlocks: BuildingBlock[];
}

export type CompoundCollateral = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
}

export interface CompoundBaseToken {
  baseAssetAddress: string;
  symbol: string;
  decimals: number;
  underlyingAddress: string;
  underlyingSymbol: string;
  protocols: Protocols[];
  buildingBlocks: BuildingBlock[];
  collateralTokens: CompoundCollateral[]
}

export const ProtocolsByBuildingBlock: Partial<
  Record<BuildingBlock, Protocols[]>
> = {
  [BuildingBlock.SWAP]: [Protocols.OPENOCEAN, Protocols.UNISWAP],
  [BuildingBlock.LEND]: [Protocols.AAVE, Protocols.COMPOUND],
  [BuildingBlock.BORROW]: [Protocols.AAVE, Protocols.COMPOUND],
};
