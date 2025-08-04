import '@testing-library/jest-dom';

// Polyfill structuredClone for Jest environment
global.structuredClone = global.structuredClone || ((obj) => {
  if (obj === null || obj === undefined) return obj;
  const jsonString = JSON.stringify(obj);
  if (jsonString === undefined) return obj;
  return JSON.parse(jsonString);
});
