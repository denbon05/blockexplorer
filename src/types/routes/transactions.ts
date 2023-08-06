import { ETHBlock } from './blocks';

export interface ITxData {
  transactions: ETHBlock['transactions'];
  timestamp: string;
  fromNowTime: string;
}

export interface ITxProp {
  txHash: ITxData['transactions'][number];
  time: Pick<ITxData, 'fromNowTime' | 'timestamp'>;
}
