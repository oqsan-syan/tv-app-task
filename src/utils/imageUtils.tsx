export const getImagePath = (imageName: string) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
};
