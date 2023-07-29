import { Show, createResource, type Component } from 'solid-js';
import * as api from './api';

const App: Component = () => {
  const [blockNumber] = createResource(api.fetchBlock);

  return (
    <div class="text-center">
      <h2 class="text-2xl">
        <Show when={!blockNumber.loading} fallback="Loading...">
          Block Number: {`${blockNumber()}`}
        </Show>
      </h2>
    </div>
  );
};

export default App;
