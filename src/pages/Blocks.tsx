import BlockList from '@src/components/BlockList';
import { usePaginator } from '@src/components/utils/PaginatorProvider';
import { Component, Show } from 'solid-js';

const Blocks: Component = () => {
  const paginator = usePaginator();

  return (
    <Show when={!paginator.isLoading()} fallback="Loading....">
      <BlockList />
    </Show>
  );
};

export default Blocks;
