import fs from 'fs';

const userCsvGenerator = (filePath, start = 0, stop = 1000000) => {
  const stream = fs.createWriteStream(filePath, { flags: 'w' });
  // const csvString = '';
  for (let i = start; i <= stop; i += 1) {
    const userRow = `${i},john${i},watson${i},sherlocked${i}\n`;
    stream.write(userRow);
  }
  stream.on('end', () => {
    stream.end();
  });
};


userCsvGenerator('./userData/1.csv', 10000001, 20000000);
