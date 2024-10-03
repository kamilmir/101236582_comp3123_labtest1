import fs from 'fs';
import path from 'path';


const logDir = path.join(process.cwd(), 'Logs');


if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log('Logs directory created.');
}


process.chdir(logDir);


for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}`);
    console.log(`Created file: ${fileName}`); 
}
