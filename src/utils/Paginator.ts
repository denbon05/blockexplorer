import { fetchLastBlockNumber } from '@src/api';
import type { PaginatorOpts } from '@src/types/paginator';
import { BlocksSearchParams } from '@src/types/routes/blocks';
import {
  Accessor,
  Resource,
  createComputed,
  createResource,
  createSignal,
} from 'solid-js';
import { useSearchParams } from '@solidjs/router';

class Paginator {
  private defaultPage = 1;
  public itemsPerPage: PaginatorOpts['itemsPerPage'];
  public lastItem: Resource<number>;
  public page: Accessor<number>;
  public setPage: (pageNum: number) => void;
  public refetchLastItemNum: () => void;

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
      setPage(pageNum);
    };
    const [lastBlockNumber, { refetch }] = createResource(fetchLastBlockNumber);
    this.refetchLastItemNum = refetch;
    this.lastItem = lastBlockNumber ?? 0;
  }

  public isLoading = () => this.lastItem.loading;

  public goToPage = (page = this.page()) => {
    this.setPage(page);
  };

  /**
   * Compute the begin and end numbers of the range of items for page
   * in DESC order.
   */
  public getItemsRange = () => {
    const [maxNum, setMaxNum] = createSignal<number>(this.lastItem() ?? 0);
    const [minNum, setMinNum] = createSignal<number>(this.lastItem() ?? 0);
    createComputed(() => {
      // Compute the begin and end numbers of the range of items to fetch
      const lastItemNum =
        this.lastItem()! - (this.page() - 1) * this.itemsPerPage;
      const firstItemNum = lastItemNum - this.itemsPerPage;
      setMaxNum(lastItemNum);
      setMinNum(firstItemNum);
    });

    return {
      maxNum,
      minNum,
    };
  };
}

// ? Proxy breaks SolidJS behavior, seems like `isLoading` calling recursively
export default Paginator;
