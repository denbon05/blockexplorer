import { Component, For } from 'solid-js';
import type { ITxData } from '@src/types/routes/transactions';
import Transaction from './Transaction';

const TransactionList: Component<{ tx: ITxData }> = (props) => {
  return (
    <For each={props.tx.transactions}>
      {(txHash) => (
        <Transaction
          txHash={txHash}
          time={{
            timestamp: props.tx.timestamp,
            fromNowTime: props.tx.fromNowTime,
          }}
        />
      )}
    </For>
  );
};

export default TransactionList;
