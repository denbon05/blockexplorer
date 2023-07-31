import BlockList from '@src/components/blocks/BlockList';
import { usePaginator } from '@src/components/utils/PaginatorProvider';
import { Component, Show } from 'solid-js';

const Blocks: Component = () => {
  const paginator = usePaginator();

  return (
    <div class="py-2">
      <Show when={!paginator.isLoading()} fallback="Loading....">
        <BlockList />
      </Show>
    </div>
  );
};

export default Blocks;
