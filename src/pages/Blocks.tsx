import BlockList from '@src/components/blocks/BlockList';
import Loading from '@src/components/common/Loading';
import { usePaginator } from '@src/components/utils/PaginatorProvider';
import { Component, Show } from 'solid-js';

const Blocks: Component = () => {
  const paginator = usePaginator();

  return (
    <div class="py-2 container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <Show when={!paginator.isLoading()} fallback={<Loading />}>
            <BlockList />
          </Show>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
