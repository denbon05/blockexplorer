import { fetchBlock, subscribeTo } from '@src/api';
import { ETHBlock } from '@src/types/routes/blocks';
import {
  Component,
  For,
  Resource,
  Suspense,
  SuspenseList,
  createEffect,
  createResource,
  createSignal,
  lazy,
  onMount,
} from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import Loading from '../common/Loading';
import { usePaginator } from '../utils/PaginatorProvider';
import { AlchemySubscription } from 'alchemy-sdk';

const BlockInfo = lazy(() => import('./BlockInfo'));

const BlockList: Component = () => {
  const paginator = usePaginator();
  const { maxNum } = paginator.getItemsRange();

  const [blocks, setBlocks] = createStore<Resource<ETHBlock>[]>([]);

  createEffect(() => {
    const fetchBlockResources = Array
      // create range
      .from(
        { length: paginator.itemsPerPage },
        // eslint-disable-next-line solid/reactivity
        (_, idx) => maxNum() - idx,
      )
      .map((blockNum) => {
        const [block] = createResource(blockNum, fetchBlock);
        return block;
      });

    setBlocks(fetchBlockResources);
  });

  onMount(() => {
    let currentBlockNum = paginator.lastItem()!;
    subscribeTo<{ transaction: { blockNumber: string } }>(
      {
        method: AlchemySubscription.MINED_TRANSACTIONS,
      },
      ({ transaction: { blockNumber } }) => {
        const isNewBlockMined = parseInt(blockNumber) > currentBlockNum;
        if (isNewBlockMined && paginator.page() === 1) {
          // update only on the first page
          paginator.refetchLastItemNum();
          currentBlockNum += 1;
          // TODO fetch precisely the last item
        }
      },
    );
  });

  return (
    <div>
      <SuspenseList revealOrder="forwards" tail="collapsed">
        <ul class="list-group">
          <For each={blocks}>
            {(block) => (
              <Suspense fallback={<Loading />}>
                <BlockInfo block={block()!} />
              </Suspense>
            )}
          </For>
        </ul>
      </SuspenseList>
    </div>
  );
};

export default BlockList;
