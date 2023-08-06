import type { ETHBlock } from '@src/types/routes/blocks';
import { Component, Show } from 'solid-js';
import BlockMainInfo from './BlockMainInfo';
import BlockSecondaryInfo from './BlockSecondaryInfo';

const BlockInfo: Component<{ block: ETHBlock }> = (props) => {
  return (
    <Show when={props.block} keyed>
      {(block) => (
        <li class="list-group-item card">
          <div class="card-body d-flex justify-content-between">
            <BlockMainInfo block={props.block} />
            <div class="flex-grow-1 text-end">
              <BlockSecondaryInfo block={block} />
            </div>
          </div>
        </li>
      )}
    </Show>
  );
};

export default BlockInfo;
