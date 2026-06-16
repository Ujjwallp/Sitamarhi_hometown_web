const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const srcDir = path.join(projectRoot, 'src');

// Define mappings
const sections = [
  'hero',
  'top-places',
  'administration',
  'culture',
  'history',
  'blocks',
  'district-directory',
  'district-overview',
  'emergency',
  'map-section',
  'quick-access',
  'why-visit'
];

const dataMappings = {
  'src/data/places.js': 'src/pages/home/sections/top-places/placesData.js',
  'src/data/timeline.js': 'src/pages/home/sections/history/timelineData.js',
  'src/data/administration.js': 'src/pages/home/sections/administration/administrationData.js',
  'src/data/culture.js': 'src/pages/home/sections/culture/cultureData.js'
};

const assetFolders = {
  'src/assets/images/hero': 'src/pages/home/sections/hero/images',
  'src/assets/images/places': 'src/pages/home/sections/top-places/images',
  'src/assets/images/administration': 'src/pages/home/sections/administration/images',
  'src/assets/images/culture': 'src/pages/home/sections/culture/images'
};

// Helper to ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// 1. Create all feature directories and move component files
sections.forEach(sec => {
  const destDir = path.join(srcDir, 'pages', 'home', 'sections', sec);
  ensureDir(destDir);

  const srcFile = path.join(srcDir, 'pages', 'home', 'sections', `${sec}.jsx`);
  const destFile = path.join(destDir, 'index.jsx');

  if (fs.existsSync(srcFile)) {
    fs.renameSync(srcFile, destFile);
    console.log(`Moved component: ${srcFile} -> ${destFile}`);
  } else {
    console.log(`Warning: Component file ${srcFile} does not exist or already moved.`);
  }
});

// 2. Move data files
Object.entries(dataMappings).forEach(([oldRelPath, newRelPath]) => {
  const oldPath = path.join(projectRoot, oldRelPath);
  const newPath = path.join(projectRoot, newRelPath);

  ensureDir(path.dirname(newPath));

  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved data file: ${oldPath} -> ${newPath}`);
  } else {
    console.log(`Warning: Data file ${oldPath} does not exist or already moved.`);
  }
});

// 3. Move asset folders
Object.entries(assetFolders).forEach(([oldRelPath, newRelPath]) => {
  const oldPath = path.join(projectRoot, oldRelPath);
  const newPath = path.join(projectRoot, newRelPath);

  if (fs.existsSync(oldPath)) {
    ensureDir(newPath);
    const files = fs.readdirSync(oldPath);
    files.forEach(file => {
      const srcFile = path.join(oldPath, file);
      const destFile = path.join(newPath, file);
      fs.renameSync(srcFile, destFile);
      console.log(`Moved asset: ${srcFile} -> ${destFile}`);
    });
    // Remove old empty folder
    fs.rmdirSync(oldPath);
    console.log(`Removed empty folder: ${oldPath}`);
  } else {
    console.log(`Warning: Asset folder ${oldPath} does not exist or already moved.`);
  }
});

// Helper to recursively walk a directory
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

// 4. Update import paths in all files under src
const replacements = [
  // Data imports
  { from: /@\/data\/places/g, to: '@/pages/home/sections/top-places/placesData' },
  { from: /@\/data\/timeline/g, to: '@/pages/home/sections/history/timelineData' },
  { from: /@\/data\/administration/g, to: '@/pages/home/sections/administration/administrationData' },
  { from: /@\/data\/culture/g, to: '@/pages/home/sections/culture/cultureData' },

  // Asset imports
  { from: /@\/assets\/images\/places/g, to: '@/pages/home/sections/top-places/images' },
  { from: /@\/assets\/images\/administration/g, to: '@/pages/home/sections/administration/images' },
  { from: /@\/assets\/images\/hero/g, to: '@/pages/home/sections/hero/images' },
  { from: /@\/assets\/images\/culture/g, to: '@/pages/home/sections/culture/images' }
];

walkDir(srcDir, (filePath) => {
  if (path.extname(filePath) === '.jsx' || path.extname(filePath) === '.js' || path.extname(filePath) === '.css') {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    replacements.forEach(rep => {
      content = content.replace(rep.from, rep.to);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated imports in: ${filePath}`);
    }
  }
});

// Cleanup empty src/data directory if it exists and is empty
const dataDir = path.join(srcDir, 'data');
if (fs.existsSync(dataDir)) {
  const files = fs.readdirSync(dataDir);
  if (files.length === 0) {
    fs.rmdirSync(dataDir);
    console.log(`Cleaned up empty data directory: ${dataDir}`);
  }
}

console.log('Refactoring complete!');
