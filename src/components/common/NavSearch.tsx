import { useNavigate } from '@solidjs/router';
import { fetchBalance } from '@src/api';
import { Component, createEffect, createSignal } from 'solid-js';
import { useToast } from '../utils/ToastProvider';
import logger from '@src/utils/logger';

const NavSearch: Component = () => {
  const [searchValue, setSearchValue] = createSignal('');
  const [balance, setBalance] = createSignal<string>();
  const [, { show: showToast }] = useToast();

  const search = async () => {
    try {
      const fetchedBalance = await fetchBalance(searchValue());
      setBalance(fetchedBalance);
    } catch (err) {
      logger.error(err);
      showToast(err.message);
    }
  };
  const pressEnter = ({ code }: KeyboardEvent) => {
    if (code === 'Enter') {
      search();
    }
  };

  createEffect(() => {
    const navigate = useNavigate();
    if (balance()) {
      navigate(`/account/${searchValue()}`, {
        state: balance(),
      });
    }
  });

  return (
    <div class="d-flex flex-column">
      <div class="d-flex">
        <input
          class="form-control me-2 w-100"
          type="search"
          placeholder="Search account"
          aria-label="Search"
          onInput={({ target: { value } }) => setSearchValue(value)}
          onKeyPress={pressEnter}
        />
        <button onClick={search} class="btn btn-outline-success" type="submit">
          Search
        </button>
      </div>
    </div>
  );
};

export default NavSearch;
