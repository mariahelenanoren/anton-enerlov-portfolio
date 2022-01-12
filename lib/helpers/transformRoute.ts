export const transformToRoute = (text: string) => {
  const route = text.replace(/-/g, '&').replace(/ /g, '-').toLowerCase();
  return route;
};

export const transformFromRoute = (route: string) => {
  const text = route.replace(/-/g, ' ').replace(/&/g, '-');
  return text;
};
