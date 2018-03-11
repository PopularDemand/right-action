const path = require('path');
const fs = require('fs');

const PAGES_DIR = path.resolve(__dirname, 'src/scripts/pages');

const getPages = () => {
  const files = fs.readdirSync(PAGES_DIR);
  return files.reduce((pages, file) => {
    const name = file.match(/(.*)\..*/)[1];
    pages[name] = path.resolve(PAGES_DIR, file);
    return pages;
  }, {});
};

module.exports = {
  entry: getPages(),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
