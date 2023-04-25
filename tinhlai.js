
let v = +prompt('so tiền gốc ban đầu');
let r = +prompt('lãi suất định kỳ, đơn vị %');
let n = +prompt('số kỳ hạn tính lãi');

let rTranslate = r / 100;

let a = v * (1 + rTranslate * n);


console.log('kết quả của lãi đơn' + ' ' + Math.ceil(a));
