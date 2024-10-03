import fs from 'fs';
import path from 'path';


const logDir = path.join(process.cwd(), 'Logs');


if (fs.existsSync(logDir)) {
    
    const files = fs.readdirSync(logDir);

   
    files.forEach((file) => {
        const filePath = path.join(logDir, file);
        console.log(`Deleting file: ${file}`); 
        fs.unlinkSync(filePath); 
    });

    
    fs.rmdirSync(logDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
