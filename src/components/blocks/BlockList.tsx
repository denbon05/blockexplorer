import { fetchBlock } from '@src/api';
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
} from 'solid-js';
import Loading from '../common/Loading';
import { usePaginator } from '../utils/PaginatorProvider';

const BlockInfo = lazy(() => import('./BlockInfo'));

const BlockList: Component = () => {
  const paginator = usePaginator();
  const { minNum, maxNum } = paginator.getItemsRange();

  const [blocks, setBlocks] = createSignal<Resource<ETHBlock>[]>();
  createEffect(() => {
    console.log({ minNum: minNum(), maxNum: maxNum() });
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

  return (
    <div>
      <SuspenseList revealOrder="forwards" tail="collapsed">
        <ul class="list-group">
          <For each={blocks()}>
            {(block) => (
              <Suspense fallback={<Loading />}>
                {block() && <BlockInfo block={block()!} />}
              </Suspense>
            )}
          </For>
        </ul>
      </SuspenseList>
    </div>
  );
};

export default BlockList;
