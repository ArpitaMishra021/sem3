const fs = require('fs');
//create file
fs.writeFile(
    'sample.txt','Welcome to Full Stack Development',(err) => {
        if(err){
            console.log('Error creating file: ', err);
            return;
        }
        console.log('File created successfully');
    }
)
//read file
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file: ',err);
        return;
    }
    console.log('File content',data);
})
//append
fs.appendFile('sample.txt','\nSemester : 3',(err) => {
    if(err){
        console.log('Error updating file: ',err);
    }else{
        console.log('\n3. File updated successfully!');
    }
})
//updated read
fs.readFile('sample.txt','utf8',(err,data) => {
    if(err){
        console.log('Error loading file: ',err);
        return;
    }
    console.log('File content',data);
})
//creating a separate  file for deletion
fs.writeFile(
    'example.txt','Welcome to Full Stack Development Workshop',(err) => {
        if(err){
            console.log('Error creating new file: ', err);
            return;
        }
        console.log('New file created successfully');
    }
)
//delete
fs.unlink('example.txt',(err)=>{
    if(err){
        console.error("Error deleting new file:",err);
    }else{
        console.log('\n4. New file deleted successfully!');
    }
})