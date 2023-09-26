import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt(
        {
            msg:"Enter your URL ",
            name:"URL"
        }
)
.then((answers)=>{
    const url=answers.URL;
    const qr_img=qr.image(url)
    
    qr_img.pipe(fs.createWriteStream("qr_code.png"));

    console.log(fs.writeFile("URL.txt",url,(err)=>{
        if (err) throw err
        else
        console.log("File saved")
    }))
})
.catch((error)=>{
    if(error.isTtyError) 
        console.log("Error Occured")
    else{
        console.log("Something went wrong")
    }
})
