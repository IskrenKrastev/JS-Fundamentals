function passwordValidator(password) {

    let isDigit = (asciiCode) => asciiCode >= 48 && asciiCode <= 57;


    function isValidLength() {

        return password.length >= 6 && password.length <= 10;

    }

    function isValidLetterOrDigits() {
        let lowerPass = password.toLowerCase();
        let isLetter = (asciiCode) => asciiCode >= 97 && asciiCode <= 122;

        for (let i = 0; i < lowerPass.length; i++) {
            let ascii = lowerPass.charCodeAt(i)

            if (isLetter(ascii) || isDigit(ascii)) {
                continue;
            }
            return false;
        }
        return true;

    }

    function isdigitValue() {
        let digitCount = 0
        for (let i = 0; i < password.length; i++) {
            let ascii = password.charCodeAt(i)

            if (isDigit(ascii)) {
                digitCount++
            }
        }
        return digitCount >= 2;
    }


    let length = isValidLength();
    let letOrDig = isValidLetterOrDigits();
    let digValue = isdigitValue();

    if (!length) {
        console.log('Password must be between 6 and 10 characters');

    }
    if (!letOrDig) {
        console.log('Password must consist only of letters and digits')
    }
    if (!digValue) {
        console.log('Password must have at least 2 digits')
    }

    if (length && letOrDig && digValue) {
        console.log('Password is valid');
    }

}
passwordValidator('logIn');