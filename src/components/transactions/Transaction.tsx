import { ITxProp } from '@src/types/routes/transactions';
import { Component, Show, createSignal, lazy } from 'solid-js';

const TransactionAbout = lazy(() => import('./TransactionAbout'));

const Transaction: Component<ITxProp> = (props) => {
  const [isTxAboutVisible, setTxAboutVisibility] = createSignal(false);
  const [isAboutLoading, setIsAboutLoading] = createSignal(false);

  return (
    <li class="list-group-item">
      <div class="d-flex justify-content-between align-items-center">
        <h6>{props.txHash}</h6>
        <button
          type="button"
          aria-current="true"
          class="btn btn-outline-secondary btn-sm rounded-pill flex-shrink-1 text-center"
          onClick={() => setTxAboutVisibility(!isTxAboutVisible())}
          disabled={isAboutLoading()}
        >
          <i
            class={
              isTxAboutVisible() ? 'bi-arrow-up-short' : 'bi-arrow-down-short'
            }
          />
        </button>
      </div>

      <Show when={isTxAboutVisible()}>
        <div class="mt-3 mb-4">
          <TransactionAbout
            txHash={props.txHash}
            time={props.time}
            setIsAboutLoading={setIsAboutLoading}
          />
        </div>
      </Show>
    </li>
  );
};

export default Transaction;
