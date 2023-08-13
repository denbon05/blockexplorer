import { Accessor } from 'solid-js';

export type ToastOpts = {
  color: 'danger' | 'warning' | 'success';
};

type ToastHandlers = {
  show: (msg: string, opts?: ToastOpts) => void;
  hide: () => void;
};

export type ToastCtx = [Accessor<boolean>, ToastHandlers];
