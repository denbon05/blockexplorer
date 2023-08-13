import { AlchemyEventType } from 'alchemy-sdk';
import { alchemy } from './init';

export const subscribeTo = <T>(
  alchemyEvent: AlchemyEventType,
  listener: (arg: T) => void,
) => {
  alchemy.ws.on(alchemyEvent, listener);
};
