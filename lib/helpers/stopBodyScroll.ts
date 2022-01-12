export const stopBodyScroll = (shouldStop: boolean) => {
  const wrapper = document.getElementById('__next');

  if (wrapper) {
    if (shouldStop) {
      wrapper.style.maxHeight = '100vh';
      wrapper.style.overflowY = 'hidden';
    } else {
      wrapper.style.maxHeight = 'auto';
      wrapper.style.overflowY = 'auto';
    }
  }
};
