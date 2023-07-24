import { createSignal, type Component, createEffect } from "solid-js";
import { Alchemy, Network } from "alchemy-sdk";

import styles from "./App.module.css";

const settings = {
  apiKey: import.meta.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

const App: Component = () => {
  const [blockNumber, setBlockNumber] = createSignal<number>();
  createEffect(async () => {
    setBlockNumber(await alchemy.core.getBlockNumber());
  });

  return <div class={styles.App}>Block Number: {`${blockNumber()}`}</div>;
};

export default App;
