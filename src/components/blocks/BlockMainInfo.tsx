import { ETHBlock } from '@src/types/routes/blocks';
import moment from 'moment';
import { Component, Resource } from 'solid-js';

const BlockMainInfo: Component<{ block: Resource<ETHBlock> }> = (props) => {
  return (
    <div class="d-flex align-items-center">
      <i class="bi-box me-2 h2 pt-2" />
      <div class="d-flex flex-column">
        <span>{props.block()?.number}</span>
        <span>
          {moment()
            .subtract(props.block()?.timestamp)
            .fromNow()}
        </span>
      </div>
    </div>
  );
};

export default BlockMainInfo;
