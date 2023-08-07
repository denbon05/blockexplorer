import { Navigate, Route, Routes } from '@solidjs/router';
import { ErrorBoundary, type Component, lazy } from 'solid-js';
import PaginatorProvider from './components/utils/PaginatorProvider';
import { BlockData } from './data/block.data';
import { TransactionData } from './data/transaction.data';
import BlockAbout from './pages/BlockAbout';
import Blocks from './pages/Blocks';
import Transactions from './pages/Transactions';
import NavBar from './components/common/NavBar';
import ErrorFallback from './components/common/ErrorFallback';

const Account = lazy(() => import('./pages/Account'));

/** TODO
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
    <ErrorBoundary
      fallback={(err, reset) => <ErrorFallback err={err} reset={reset} />}
    >
      <NavBar />

      <Routes>
        <Route path="/account/:address" component={Account} />
        <Route path="/" element={<Navigate href="/blocks" />} />
        <Route path="/blocks">
          <Route
            path="/"
            element={
              <PaginatorProvider>
                <Blocks />
              </PaginatorProvider>
            }
          />
          <Route path="/:blockNum" component={BlockAbout} data={BlockData} />
          <Route
            path="/:blockNum/transactions"
            component={Transactions}
            data={TransactionData}
          />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
