module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let string = number.toString();
    let word;
    let words = [];

    if (parseInt(string) === 0) return 'zero';

    if(string) {
        let integer = string.split('').reverse().map(parseFloat);

        if (integer[1] === 1) integer[0] += 10;

        if (word = units[integer[0]]) words.push(word);

        if (word = tens[integer[1]]) words.push(word);

        if (word = units[integer[2]]) words.push(word + ' hundred');
    }

    return words.reverse().join(' ');
}
