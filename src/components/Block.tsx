import type { ETHBlock } from '@src/types/routes/blocks';
import { Component } from 'solid-js';

const Block: Component<ETHBlock> = (props) => {
  return <div>{props.number}</div>;
};

export default Block;
