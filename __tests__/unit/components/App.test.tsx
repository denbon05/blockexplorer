import { render } from '@solidjs/testing-library';
import App from '../../../src/App';

// TODO: mock external requests
test('Render App component', () => {
  const { getByText, unmount } = render(() => <App />);
  expect(getByText('Block Number')).toBeInTheDocument();
  unmount();
});
