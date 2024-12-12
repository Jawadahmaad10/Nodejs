// File System

// The Node.js file system module allows you to work with the file system on your computer.
const { error } = require('console');
const fs = require('fs');



//1.
//reading files
fs.readFile('./docs/blog1.txt' , (err , data) => {
  if(err){
    console.log(err);
  }

//   console.log(data);
console.log(data.toString());
    
})



//2.
// writing files
fs.writeFile('./docs/.blog1.txt' , 'Hello Jawad' , () =>{
 console.log("file is written already");
});

// it will create a file if it does not exist


fs.writeFile('./docs/blog2.txt' , 'this is blog2' , () =>{
 console.log('Blog 2 file made');
});


//3.
// Directories
// Check if the 'assets' directory exists
if(!fs.existsSync('./assets')){
 // If it doesn't exist, create the directory   
    fs.mkdir('./assets' , (err) =>{
        if(err){
         console.log(err);   
        }
        console.log('Folder created');
    })
}

else{
    fs.rmdir('./assets' , (err) =>{
        if(err){
          console.log(err);  
        }

        else{
          console.log('folder deleted');  
        }
    })
}


//deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
   // unlink method used to delete the file
   fs.unlink('./docs/deleteme.txt', (err) =>{
    if(err){
        console.log(err);
    }

    console.log('file deleted');
   }) 
}