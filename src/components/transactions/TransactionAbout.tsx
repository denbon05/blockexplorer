import { fetchTransaction } from '@src/api';
import { ITxProp } from '@src/types/routes/transactions';
import {
  Component,
  Setter,
  Show,
  createComputed,
  createResource,
} from 'solid-js';
import Loading from '../common/Loading';

const TransactionAbout: Component<
  ITxProp & { setIsAboutLoading: Setter<boolean> }
> = (props) => {
  const [tx] = createResource(() => props.txHash, fetchTransaction);
  createComputed(() => {
    props.setIsAboutLoading(tx.loading);
  });

  return (
    <Show when={!tx.loading} fallback={<Loading />}>
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-between">
          <div>Block:</div>
          <div>{tx()?.blockHash}</div>
        </div>
        <div class="d-flex justify-content-between">
          <div>Status:</div>
          <div>{tx()?.statusText}</div>
        </div>
        <div class="d-flex justify-content-between">
          <div>Timestamp (TODO):</div>
          <div>
            {props.time.fromNowTime} ({props.time.timestamp})
          </div>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <div>From:</div>
          <div>{tx()!.from}</div>
        </div>
        <div class="d-flex justify-content-between">
          <div>To:</div>
          <div>{tx()!.to}</div>
        </div>
        <Show when={tx()?.valueInETH}>
          <div class="d-flex justify-content-between">
            <div>Value:</div>
            <div>{tx()!.valueInETH} ETH</div>
          </div>
        </Show>
        {/* (TODO) <div class="d-flex justify-content-between">
          <div>Transaction Fee (TODO):</div>
          <div>{tx()?.effectiveGasPrice.toString()}</div>
        </div> */}
        <Show when={tx()?.gasInETH}>
          <div class="d-flex justify-content-between">
            <div>Gas Prise:</div>
            <div>{tx()?.gasInETH} ETH</div>
          </div>
        </Show>
      </div>
    </Show>
  );
};

export default TransactionAbout;
