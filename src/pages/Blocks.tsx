import BlockList from '@src/components/blocks/BlockList';
import Loading from '@src/components/common/Loading';
import { usePaginator } from '@src/components/utils/PaginatorProvider';
import { Component, Show } from 'solid-js';

const Blocks: Component = () => {
  const paginator = usePaginator();

  return (
    <div class="py-2 container">
      <div class="row justify-content-center">
        <div class="col position-relative">
          <div class="position-fixed top-50 left-15">
            <button
              type="button"
              class="btn btn-link"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Previous page"
              onClick={() => paginator.goToPage(paginator.page() - 1)}
              disabled={paginator.page() === 1}
            >
              <i class="bi-arrow-left h3" />
            </button>
          </div>
        </div>

        <div class="col-md-8 col-lg-6 position-relative">
          <Show when={!paginator.isLoading()} fallback={<Loading />}>
            <BlockList />
          </Show>
        </div>

        <div class="col position-relative">
          <div class="position-fixed top-50 right-15">
            <button
              type="button"
              class="btn btn-link"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Next page"
              onClick={() => paginator.goToPage(paginator.page() + 1)}
            >
              <i class="bi-arrow-right h3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
