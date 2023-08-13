import { fetchNftsForOwner } from '@src/api/nft';
import {
  Component,
  For,
  Show,
  createEffect,
  createResource,
  lazy,
} from 'solid-js';
import Loading from '../common/Loading';

const NFTItem = lazy(() => import('./NFTItem'));

const NFTList: Component<{ address: string }> = (props) => {
  const [response] = createResource(() => props.address, fetchNftsForOwner);

  return (
    <Show
      when={!response.loading && response()?.ownedNfts.length}
      fallback={<Loading />}
    >
      <div class="d-flex flex-column">
        <h5>NFTs amount: {response()?.totalCount}</h5>
        <For each={response()?.ownedNfts}>{(nft) => <NFTItem nft={nft} />}</For>
      </div>
    </Show>
  );
};

export default NFTList;
