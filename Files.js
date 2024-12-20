const fs = require('fs');

//reading files
fs.readFile('./Docs/docs.txt', (error, data) => {
    if (error){
        console.log(error);
    }
    console.log(data.toString());
});


//writing files 
fs.writeFile('./Docs/docs.txt','Hello Zubair', () => {
   console.log('File was Written')
}) ;

fs.writeFile('./Docs/docs1.txt','Hello Again', () => {
    console.log('File was Written')
 }) ;

 
 //Directories 
 if (!fs.existsSync('./Assets')){
    fs.mkdir('./Assets', (err)=> {
        if (err)    {
            console.log(err)
        }
        console.log('Folder Created')
     })
 }else{
    fs.rmdir('./Assets', (err) => {
        if (err){
            console.log(err)
        }
        console.log('Folder Deleted')
    })
 }

 
 // Delete a File
 
 if (fs.existsSync('./Docs/demotext.txt')){
    fs.unlink('./Docs/demotext.txt', (err) =>{
        if (err){
            console.log(err)
            
        }
        console.log('File Deleted')
    })
 }
 
 
 
 
 
 // Streams and Buffers
 
const readStream = fs.createReadStream('./Docs/readData.txt', {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./Docs/writeData.txt');
// readStream.on('data', (chunk) =>{
//     console.log('----------New Chunk--------------');
//     console.log(chunk);
//     writeStream.write('\n New Chunk \n');
//     writeStream.write(chunk);
// })

//Piping
readStream.pipe(writeStream);
