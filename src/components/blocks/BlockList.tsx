import { usePaginator } from '@src/components/utils/PaginatorProvider';
import { Component, For, Suspense, SuspenseList, lazy } from 'solid-js';
import Loading from '../common/Loading';

const BlockInfo = lazy(() => import('./BlockInfo'));

const BlockList: Component = () => {
  const paginator = usePaginator();
  // fetch data for specific page
  const blocks = paginator.goToPage();

  return (
    <div>
      <SuspenseList revealOrder="forwards" tail="collapsed">
        <ul class="list-group">
          <For each={blocks()}>
            {(block) => (
              <Suspense fallback={<Loading />}>
                <BlockInfo block={block} />
              </Suspense>
            )}
          </For>
        </ul>
      </SuspenseList>
    </div>
  );
};

export default BlockList;
