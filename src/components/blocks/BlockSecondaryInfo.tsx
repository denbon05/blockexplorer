import { A } from '@solidjs/router';
import { ETHBlock } from '@src/types/routes/blocks';
import { Component } from 'solid-js';

const BlockSecondaryInfo: Component<{ block: ETHBlock }> = (props) => {
  return (
    <div class="d-flex flex-column align-items-end">
      <A href={`/blocks/${props.block.number}/transactions`}>
        {props.block.transactions.length} txsn
      </A>
    </div>
  );
};

export default BlockSecondaryInfo;
