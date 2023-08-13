import { ToastCtx, ToastOpts } from '@src/types/toast';
import {
  Component,
  JSXElement,
  Show,
  createContext,
  createSignal,
  useContext,
} from 'solid-js';
import { createStore } from 'solid-js/store';

const ToastContext = createContext<ToastCtx>();

const ToastProvider: Component<{ children: JSXElement }> = (props) => {
  const [isToastVisible, setToastVisibility] = createSignal(false);
  const [notification, setNotification] = createSignal('');
  const defaultToastOpts: ToastOpts = { color: 'danger' };
  const [toastOpts, setToastOpts] = createStore<ToastOpts>(defaultToastOpts);

  const close = () => {
    setToastVisibility(false);
  };

  const toastHandler: ToastCtx = [
    isToastVisible,
    {
      hide() {
        setToastVisibility(false);
      },
      show(msg: string, opts = defaultToastOpts) {
        setToastOpts({
          ...toastOpts,
          ...opts,
        });
        setNotification(msg);
        setToastVisibility(true);
      },
    },
  ];

  return (
    <ToastContext.Provider value={toastHandler}>
      {props.children}
      <Show when={isToastVisible()}>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            id="liveToast"
            class="toast d-flex"
            classList={{
              [`text-bg-${toastOpts.color}`]: true,
              show: isToastVisible(),
            }}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="toast-body">{notification()}</div>
            <button
              type="button"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={close}
            />
          </div>
        </div>
      </Show>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
export const useToast = (): ToastCtx => useContext(ToastContext)!;
