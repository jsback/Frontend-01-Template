
// 整数
let numReg = /^-?[0-9]+$/;
console.log(numReg.test(-123));
// true

// 浮点数
let floatReg = /^-?[0-9]+\.[0-9]+$/;
console.log(floatReg.test(4.));
// true
// 2进制
let num2Reg = /^-?0b[01]+$/i;
console.log(num2Reg.test('0b0101'));
// true

// 8进制 非严格模式下0开头也代表8进制
let num8Reg = /^-?0o[0-7]+$/i;
console.log(num8Reg.test('0o0717'));
// true

// 16进制
let num16Reg = /^-?0x[0-9a-f]+$/i;
console.log(reglur.test('-0xFF'));
//true

// 科学计数法
let scienceNumReg = /^-?[\d]+([\.][\d]+)?([e][+-]?[\d]+)?$/i;
console.log(scienceNumReg.test('1.2e3'));
// true

// utf-8 Encoding
const utf8Encoding = (strs) => {
    return strs.split('').reduce((str, item) => str + '\\u' + item.codePointAt().toString(16).padStart(4, '0'), '')
}
console.log(utf8Encoding('jiaoshuang'));
// \u006a\u0069\u0061\u006f\u0073\u0068\u0075\u0061\u006e\u0067

// 正则匹配字符
let strReg = /^[\u4E00-\u9FFF0-9a-zA-Z_\'\"]+$/;
console.log(strReg.test("\"焦sahdk2sahd12821"));
// true