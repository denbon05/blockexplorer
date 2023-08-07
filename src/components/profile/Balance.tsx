import { Component, createEffect, createSignal } from 'solid-js';

const Balance: Component<{ balance: string }> = (props) => {
  const [normalizedBalance, setNormalizedBalance] = createSignal('');
  createEffect(() => {
    setNormalizedBalance(Number(props.balance).toFixed(4));
  });

  return <div>{normalizedBalance()} ETH</div>;
};

export default Balance;
