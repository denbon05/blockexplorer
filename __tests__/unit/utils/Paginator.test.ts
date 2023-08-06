import Paginator from '@src/utils/Paginator';
import IBlockNumber from '__fixtures__/alchemy/eth_BlockNumber.json';
import { mockAlchemyAPI } from '__tests__/helpers/mock';

// TODO fix import { useSearchParams } from '@solidjs/router';
// TODO SyntaxError: Cannot use import statement outside a module
// ? https://github.com/solidjs/solid-router/issues/282

describe('Paginator', () => {
  let blockNumberData: typeof IBlockNumber;

  beforeEach(() => {
    blockNumberData = mockAlchemyAPI({ method: 'eth_blockNumber' });
  });

  test('Instance data should be present', () => {
    const paginator = new Paginator({ itemsPerPage: 20 });
    console.log({ paginator });
  });
});
