import { useNavigate } from '@solidjs/router';
import { fetchBalance } from '@src/api';
import { Component, createEffect, createSignal } from 'solid-js';

const NavSearch: Component = () => {
  const [searchValue, setSearchValue] = createSignal('');
  const [balance, setBalance] = createSignal<string>();
  const search = async () => {
    const fetchedBalance = await fetchBalance(searchValue());
    setBalance(fetchedBalance);
  };

  createEffect(() => {
    const navigate = useNavigate();
    if (balance()) {
      navigate(`/account/${searchValue()}`, {
        state: balance(),
      });
    }
    console.log({ balance: balance() });
  });

  return (
    <div class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onInput={({ target: { value } }) => setSearchValue(value)}
      />
      <button onClick={search} class="btn btn-outline-success" type="submit">
        Search
      </button>
    </div>
  );
};

export default NavSearch;
