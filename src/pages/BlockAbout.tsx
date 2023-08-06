import { useRouteData } from '@solidjs/router';
import { ETHBlock } from '@src/types/routes/blocks';
import { Show, type Component, type Resource } from 'solid-js';
import Loading from '../components/common/Loading';

const BlockAbout: Component = () => {
  // TODO change after https://github.com/solidjs/solid-router/issues/281
  const block = useRouteData() as unknown as Resource<ETHBlock>;

  return (
    <div class="d-flex justify-content-center mt-3">
      <Show when={block()} fallback={<Loading />}>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{block()?.hash}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Mined at {block()?.timestamp}
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default BlockAbout;
