const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const rgbToHex = (r, g, b) => {
  const toHex = (n) => {
    const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const lighten = (amount, color) => {
  const rgb = hexToRgb(color);
  if (!rgb) return color;

  return rgbToHex(
    rgb.r + (255 - rgb.r) * amount,
    rgb.g + (255 - rgb.g) * amount,
    rgb.b + (255 - rgb.b) * amount
  );
};

const darken = (amount, color) => {
  const rgb = hexToRgb(color);
  if (!rgb) return color;

  const factor = 1 - amount;
  return rgbToHex(rgb.r * factor, rgb.g * factor, rgb.b * factor);
};

const generateColourPalette = (baseColor) => {
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

export default {
  black: generateColourPalette('#000'),
  white: generateColourPalette('#fff'),
};
