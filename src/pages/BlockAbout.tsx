import { useRouteData } from '@solidjs/router';
import { ETHBlock } from '@src/types/routes/blocks';
import {
  For,
  Show,
  createSignal,
  type Component,
  type Resource,
} from 'solid-js';
import Loading from '../components/common/Loading';
import type BlockData from '@src/data/block.data';

const BlockAbout: Component = () => {
  // TODO change after https://github.com/solidjs/solid-router/issues/281
  const blockSrc = useRouteData<typeof BlockData>() as Resource<ETHBlock>;
  const [areTxsVisible, setTxsVisibility] = createSignal(false);

  return (
    <div class="d-flex justify-content-center mt-3">
      <Show when={blockSrc()} fallback={<Loading />}>
        {(block) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{block().hash}</h5>
              <div class="d-flex justify-content-between">
                <h6 class="card-subtitle mb-2 text-muted">
                  Mined at {block().timestamp}
                </h6>
                <button
                  onClick={() => setTxsVisibility(!areTxsVisible())}
                  type="button"
                  class="btn btn-link btn-sm"
                >
                  {`${areTxsVisible() ? 'Hide' : 'Show'} transactions`}
                  <i
                    classList={{
                      'bi-arrow-down-short': !areTxsVisible(),
                      'bi-arrow-up-short': areTxsVisible(),
                    }}
                  />
                </button>
              </div>

              <Show when={areTxsVisible()}>
                {/* <pre>{JSON.stringify(block(), null, 2)}</pre> */}
                <ul class="list-group-flush mt-2">
                  <For each={block().transactions}>
                    {(txHash) => <li class="list-group-item">{txHash}</li>}
                  </For>
                </ul>
              </Show>
            </div>
          </div>
        )}
      </Show>
    </div>
  );
};

export default BlockAbout;
