import { DEFAULT_ITEMS_PER_PAGE } from '@src/constants';
import Paginator from '@src/utils/Paginator';
import { Component, JSXElement, createContext, useContext } from 'solid-js';

const PaginatorContext = createContext<Paginator>();

const PaginatorProvider: Component<{ children: JSXElement }> = (props) => {
  const paginator = new Paginator({
    itemsPerPage: DEFAULT_ITEMS_PER_PAGE, // TODO should be set by user
  });
  return (
    <PaginatorContext.Provider value={paginator}>
      {props.children}
    </PaginatorContext.Provider>
  );
};

export default PaginatorProvider;
export const usePaginator = (): Paginator =>
  useContext(PaginatorContext) as Paginator;
