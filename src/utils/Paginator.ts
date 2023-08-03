import { useSearchParams } from '@solidjs/router';
import { fetchBlock, fetchLastBlockNumber } from '@src/api';
import type { PaginatorOpts } from '@src/types/paginator';
import { BlocksSearchParams, ETHBlock } from '@src/types/routes/blocks';
import {
  Accessor,
  Resource,
  Setter,
  createResource,
  createSignal,
} from 'solid-js';

class Paginator {
  private defaultPage = 1;
  private itemsPerPage: PaginatorOpts['itemsPerPage'];
  private lastItem: Resource<number>;
  private page: Accessor<number>;
  public setPage: (pageNum: number) => Setter<number>;

  constructor({ itemsPerPage }: PaginatorOpts) {
    this.itemsPerPage = itemsPerPage;
    const [{ page: querystringPageNum }, setSearchParams] =
      useSearchParams<BlocksSearchParams>();

    if (!querystringPageNum) {
      // set the default page number in the URL
      setSearchParams({
        page: this.defaultPage,
      });
    }

    const pageNumber = Number(querystringPageNum) || this.defaultPage;

    const [page, setPage] = createSignal(pageNumber);
    this.page = page;
    this.setPage = (pageNum: number) => {
      setSearchParams({
        page: pageNum,
      });
      return setPage;
    };
    this.lastItem = this.fetchLastItemNumber();
  }

  private fetchLastItemNumber = () => {
    const [lastBlockNumber] = createResource(fetchLastBlockNumber);
    return lastBlockNumber;
  };

  public isLoading = () => this.lastItem.loading;

  public goToPage = (page = this.page()) => {
    // this.setPage(page);

    const maxItemNum = this.lastItem() || 0;
    // Compute the start and end numbers of the range of items to fetch
    const toItemNum = maxItemNum - this.page() * this.itemsPerPage;
    const fromItemNum = toItemNum + this.itemsPerPage;

    const [items, setItems] = createSignal<Resource<ETHBlock>[]>([]);
    // batch(() => {
    const itemResources = Array
      // create range
      .from({ length: this.itemsPerPage }, (_, idx) => fromItemNum - idx)
      .map((itemNumber) => {
        const [item] = createResource(itemNumber, fetchBlock);
        return item;
      });
    setItems(itemResources);
    // });

    return items;
  };
}

export default Paginator;
