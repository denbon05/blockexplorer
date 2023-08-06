import { A } from '@solidjs/router';
import { ETHBlock } from '@src/types/routes/blocks';
import moment from 'moment';
import { Component } from 'solid-js';

const BlockMainInfo: Component<{ block: ETHBlock }> = (props) => {
  return (
    <div class="d-flex align-items-center">
      <i class="bi-box me-3 h2 pt-2" />
      <div class="d-flex flex-column">
        <A href={`/blocks/${props.block.number}`}>{props.block.number}</A>
        <span>{moment().subtract(props.block.timestamp).fromNow()}</span>
      </div>
    </div>
  );
};

export default BlockMainInfo;
