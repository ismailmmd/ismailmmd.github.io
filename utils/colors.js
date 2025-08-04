import { lighten, darken } from 'polished';

const generateColourPalette = baseColor => {
  const lightKeys = [300, 200, 100, 50];
  const darkKeys = [600, 700, 800, 900];
  const indexDivider = 20;

  const light = lightKeys.reduce((acc, key, index) => {
    acc[key] = lighten((index + 1) / indexDivider, baseColor);
    return acc;
  }, {});

  const dark = darkKeys.reduce((acc, key, index) => {
    acc[key] = darken((index + 1) / indexDivider, baseColor);
    return acc;
  }, {});

  return {
    ...light,
    500: baseColor,
    ...dark,
  };
};

const colors = {
  black: generateColourPalette('#000'),
  white: generateColourPalette('#fff'),
};

export default colors;
