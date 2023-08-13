import { Navigate, Route, Routes } from '@solidjs/router';
import { ErrorBoundary, type Component, lazy } from 'solid-js';
import PaginatorProvider from './components/utils/PaginatorProvider';
import BlockData from './data/block.data';
import { TransactionData } from './data/transaction.data';
import BlockAbout from './pages/BlockAbout';
import Blocks from './pages/Blocks';
import Transactions from './pages/Transactions';
import NavBar from './components/common/NavBar';
import ErrorFallback from './components/common/ErrorFallback';
import ToastProvider from './components/utils/ToastProvider';

const Account = lazy(() => import('./pages/Account'));

/** TODO
 * SUPERCHARGE
 * user notification ideas https://docs.alchemy.com/reference/webhook-types
 *
 * What transfers did an address receive this year?
 */

const App: Component = () => {
  return (
    <ErrorBoundary
      fallback={(err, reset) => <ErrorFallback err={err} reset={reset} />}
    >
      <ToastProvider>
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
      </ToastProvider>
    </ErrorBoundary>
  );
};

export default App;
