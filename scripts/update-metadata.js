#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const metadataPath = path.join(__dirname, '..', 'utils', 'metadata.json');

try {
  let metadata = {};
  if (fs.existsSync(metadataPath)) {
    const content = fs.readFileSync(metadataPath, 'utf8');
    metadata = JSON.parse(content);
  }

  const [date] = new Date().toISOString().split('T');
  metadata.lastUpdated = date;

  fs.writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('✗ Failed to update metadata:', error.message);
  process.exit(1);
}
