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

  metadata.lastUpdated = new Date().toISOString();

  fs.writeFileSync(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`);

  console.log('✓ Updated metadata with last updated timestamp');
} catch (error) {
  console.error('✗ Failed to update metadata:', error.message);
  process.exit(1);
}
