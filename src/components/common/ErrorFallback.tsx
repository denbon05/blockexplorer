import { Component } from 'solid-js';

const ErrorFallback: Component<{ err: string; reset: () => void }> = (
  props,
) => {
  return (
    <div class="d-flex flex-column align-items-center">
      <h3>Something went terribly wrong </h3>
      <div>
        <button
          onClick={() => props.reset()}
          type="button"
          class="btn btn-link"
        >
          Click to try again <i class="bi-arrow-clockwise" />
        </button>
      </div>
      <pre>{props.err}</pre>
    </div>
  );
};

export default ErrorFallback;
