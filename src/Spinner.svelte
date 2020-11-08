<style>
  .loading-spinner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    transform: scale(0.5);
  }

  .loading-spinner div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #999;
    animation: loading-spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  .loading-spinner div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }

  .loading-spinner div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }

  .loading-spinner div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }

  @keyframes loading-spinner {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
</style>

<div class="loading-spinner">
  <div />
  <div />
  <div />
</div>
