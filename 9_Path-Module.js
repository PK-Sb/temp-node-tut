const path = require('path');

//Path Seperator finds path specific seperator. For example: in Windows it's \. In Mac it would be /
console.log(path.sep);

//Normalizes file path. Very good for digging down into filepaths & it works well cross platform.
//Note how content has both / before and after -- this is normalized and it forces proper OS seperators.
const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath);

//basename gets base file name of filepath.
const base = path.basename(filePath);
console.log(base);


//Allows us to find full path simply by
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutePath);


