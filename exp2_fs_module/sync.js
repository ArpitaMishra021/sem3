const fs = require('fs');
fs.writeFileSync('student.txt', 'This is the experiment no. 2 in FSD Workshop', 'utf8');
console.log('File is written successfully');
//read
const data = fs.readFileSync('student.txt','utf8');
console.log('File content is given as : ', data);
//append
fs.appendFileSync('student.txt','\nThis file contains details of section A.');
console.log("File is updated");
const data1 = fs.readFileSync('student.txt','utf8');
console.log('File content is given as : ',data1,'\n');
//delete
/*fs.writeFileSync('file.txt','This file is created for deletion purpose','utf8');
fs.unlink('file.txt');
console.log('File deleted successfully');*/
//folder create
fs.mkdirSync('sample');
console.log('New folder created successfully');
fs.rmdirSync('sample');
console.log('New folder is deleted');
if(fs.existsSync('student.txt')){
    console.log('File exists');
}else{
    console.log('File not found, need to create this file');
}