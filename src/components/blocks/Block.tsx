import type { BlockFormatted } from '@src/types/routes/blocks';
import { Component } from 'solid-js';
import BlockMainInfo from './BlockMainInfo';

const Block: Component<BlockFormatted> = (props) => {
  return (
    <li class="list-group-item card">
      <div class="card-body">
        <BlockMainInfo {...props} />
        {/* {JSON.stringify(props, null, 2)} */}
      </div>
    </li>
  );
};

export default Block;
