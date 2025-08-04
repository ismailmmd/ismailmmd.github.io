const NPM_REGISTRY_BASE = 'https://registry.npmjs.org/';

const fetchNpmVersion = async (packageName) => {
  try {
    const response = await fetch(`${NPM_REGISTRY_BASE}${packageName}/latest`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.version;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Failed to fetch version for ${packageName}:`, error);
    return null;
  }
};

export default fetchNpmVersion;
