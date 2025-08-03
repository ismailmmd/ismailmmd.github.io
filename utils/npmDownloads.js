const NPM_API_BASE = 'https://api.npmjs.org/downloads/point/last-month/';

const fetchNpmDownloads = async (packageName) => {
  try {
    const response = await fetch(`${NPM_API_BASE}${packageName}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.downloads;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Failed to fetch download count for ${packageName}:`, error);
    return null;
  }
};

export default fetchNpmDownloads;
