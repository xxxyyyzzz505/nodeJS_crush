const fs = require('fs');
const path = require('path');

//creat folder 
// fs.mkdir(path.join(__dirname, '/test'), function(err) {
//     if (err) throw err;
//     console.log('Folder created...')
// })

//create and write files

// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'Hello World!',
//     err => {
//         if (err) throw err;
//         console.log('File written to...');

//         //File append
//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'),
//             ' I love node.js',
//             err => {
//                 if (err) throw err;
//                 console.log('File written to...')
//             }
//         );
//     }
// );

//Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8',  function(err, data) {
//         if (err) throw err;
//         console.log(data);
//     });

//Rename file
fs.rename(
    path.join(__dirname, 'test', 'hello.txt'),
    path.join(__dirname, 'test', 'helloworld.txt'),
    function (err) {
        if (err) throw err;
        console.log('File renamed...');
    }
);