import { usePaginator } from '@src/components/utils/PaginatorProvider';
import { Component, For } from 'solid-js';
import Block from './Block';

const BlockList: Component = () => {
  const paginator = usePaginator();
  // fetch data for specific page
  const blocks = paginator.fetchPageData();

  return <For each={blocks()}>{(block) => <Block {...block} />}</For>;
};

export default BlockList;
