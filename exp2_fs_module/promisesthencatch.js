const fs = require('fs').promises;
async function writeFile(){
    try{
        await fs.writeFile("promise.txt",'Hello Students!');
        console.log('File created and data written successfully')
    }catch(error){
        console.log('Error: ',error);
    }
}
writeFile();
//read file
async function readFile(){
    try{
        const data = await fs.readFile('promise.txt','utf8');
        console.log('File Content:');
        console.log(data);
    }catch (error){
        console.log('Error',error);
    }
}
readFile();
//update
async function appendFile() {
    try{
        await fs.appendFile('promise.txt','\nWelcome to FSD Training.');
        console.log("Data appended successfully.");
    }catch(error){
        console.log('Error: ',error);
    }
}
appendFile();
//rename
async function renameFile(){
    try{
        await fs.renameFile('promise.txt','promise_new.txt');
        console.log('File renamed successfully');
    }catch(error){
        console.log('Error:',error);
    }
}
//creating  file for deletion
async function writeFile(){
    try{
        await fs.writeFile("example.txt",'Hello Students!');
        console.log('New File created and data written successfully')
    }catch(error){
        console.log('Error: ',error);
    }
}
//delete
async function deleteFile() {
    try{
        await fs.unlink("example.txt");
        console.log('New file deleted successfully');
    }catch(error){
        console.log("Error:",error);
    }
}