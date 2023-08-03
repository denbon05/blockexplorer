import { Component } from 'solid-js';

const Loading: Component = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
