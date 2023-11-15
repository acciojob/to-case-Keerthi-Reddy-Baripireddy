function toCase(text) {
    if (text.length === 0) {
        return '-';
    }

    const lowercaseText = text.toLowerCase();
    const uppercaseText = text.toUpperCase();
    const result = lowercaseText + '-' + uppercaseText;

    return result;
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
