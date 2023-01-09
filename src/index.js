module.exports = function toReadable (number) {
    if (!number) return 'zero';
    var arr = [
        ['','ten',''],
        ['one', 'eleven',''],
        ['two', 'twelve', 'twenty'],
        ['three', 'thirteen', 'thirty'],
        ['four', 'fourteen', 'forty'],
        ['five', 'fifteen', 'fifty'],
        ['six', 'sixteen', 'sixty'],
        ['seven', 'seventeen', 'seventy'],
        ['eight', 'eighteen', 'eighty'],
        ['nine', 'nineteen', 'ninety'],
    ];
    var hundreds = Math.trunc(number / 100);
    var dozens = Math.trunc(number / 10 % 10);
    var units = number % 10;
    var res = '';
    if (hundreds > 0) res += arr[hundreds][0] + ' hundred';
    if (dozens > 1) res += ' ' + arr[dozens][2];
    if (dozens != 1 && units != 0) res += ' ' + arr[units][0];
    if (dozens == 1) res += ' ' + arr[units][1];
    return res.trim();
}
