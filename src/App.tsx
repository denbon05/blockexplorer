import { Navigate, Route, Routes } from '@solidjs/router';
import { type Component } from 'solid-js';
import Blocks from './pages/Blocks';
import PaginatorProvider from './components/utils/PaginatorProvider';

/** TODO
 * fetch specific block data by click/extend the item
 * include list of transactions in extended block item
 * get details about an individual transaction
 * default amount of blocks on per page 20
 * create routing, params like page number
 * make an account page where a user can look up their balance or someone balance
 *
 * SUPERCHARGE
 * get list of NFT
 * update list of blocks via WebSocket
 * use Transact API for sending transactions
 * user notification ideas https://docs.alchemy.com/reference/webhook-types
 *
 * Given a contract address and token id, can you get the NFT's metadata?
 * What is the floor price of an NFT right now?
 * Did a pending transaction get mined?
 * What transfers did an address receive this year?
 */

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate href="/blocks" />} />
      <Route
        path="/blocks"
        element={
          <PaginatorProvider>
            <Blocks />
          </PaginatorProvider>
        }
      />
    </Routes>
  );
};

export default App;
