const { createWorker } = require('tesseract.js');

const worker = createWorker();

async function readImage(image) {
  // Reading process
  // const image = './steve-jobs-3.jpg';
  console.log(`\nReading process started '${image}' ...`);
  const {
    data: { text },
  } = await worker.recognize(image);
  console.log('********************');
  console.log(text);
  console.log('********************');
}

(async () => {
  // Initialize tesseract
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');

  // Read images
  await readImage('./img-steve-jobs.jpg');
  await readImage('./img-oscar-polanco.jpg');

  // Close program
  await worker.terminate();
})();
