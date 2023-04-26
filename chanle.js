function checkresult() {
  let getNumber = document.getElementById('value_text').value;
  if (getNumber == '') {
    alert('Hãy nhập số vào đây');
  } else if (isNaN(getNumber)) {
    alert('Hãy nhập số, không phải chữ');
  } else if (getNumber % 2 == 0) {
    alert(getNumber + ' là số chẵn');
  } else {
    alert(getNumber + ' là số lẻ');
  }
}
