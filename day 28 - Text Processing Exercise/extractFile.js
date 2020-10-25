function extractFile(input) {

    let splitedInput = input.split('\\');
    let fileInfo = splitedInput[splitedInput.length - 1];
    fileInfo = fileInfo.split('.');
    let fileExtension = fileInfo.pop();
    let fileName = fileInfo.join('.')

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bbb.pptx')