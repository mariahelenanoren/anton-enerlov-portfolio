export const transformToRoute = (text: string) => {
  const route = text.replaceAll('-', '&').replaceAll(' ', '-').toLowerCase();
  return route;
};

export const transformFromRoute = (route: string) => {
  const text = route.replaceAll('-', ' ').replaceAll('&', '-');
  return text;
};
