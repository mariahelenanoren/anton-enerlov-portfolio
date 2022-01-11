export const stopBodyScroll = (shouldStop: boolean) => {
  const body = document.body;

  if (shouldStop) {
    body.style.maxHeight = '100vh';
    body.style.overflowY = 'hidden';
  } else {
    body.style.maxHeight = 'auto';
    body.style.overflowY = 'auto';
  }
};
