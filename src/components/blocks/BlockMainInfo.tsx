import { BlockFormatted } from '@src/types/routes/blocks';
import { Component } from 'solid-js';

const BlockMainInfo: Component<BlockFormatted> = (props) => {
  return (
    <div class="d-flex align-items-center">
      <i class="bi-box me-2 h2 pt-2" />
      <div class="d-flex flex-column">
        <span>{props.number}</span>
        <span>{props.timestamp}</span>
      </div>
    </div>
  );
};

export default BlockMainInfo;
