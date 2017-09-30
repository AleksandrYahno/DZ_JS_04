//      Задача 1. Напишите функцию, которая выделяет все параграфы на странице красным цветом фона.

function redCol() {
  var rc = document.getElementsByTagName('p');
  for (var i = 0; i < rc.length; i++) {
    rc[i].style.backgroundColor = '#D6272D';
  }
}
redCol();

//      Задача 2. Напишите функцию, которая добавляет тень всем изображениям на странице.

function imgShadow() {
  var is = document.getElementsByTagName('img');
  for (var i = 0; i < is.length; i++) {
    is[i].style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  }
}
imgShadow();

//      Задача 3. Напишите функцию, которая нумерует все абзацы страницы и добавляет номер перед текстом абзацев.
//      https://learn.javascript.ru/multi-insert

function addNum() {
  var an = document.getElementsByTagName('p');
  for (var i = 0; i < an.length; i++) {
    an[i].insertAdjacentHTML('beforeBegin', '<hr>' + [i + 1]);
  }
}
addNum();

//      Задача 4. Используя глобальную переменную напишите функцию, которая будет подсчитывать количество нажатий на кнопки. Кнопок – две, реализуйте их в HTML.

document.getElementById('btn1').onclick = funNum;
document.getElementById('btn2').onclick = funNum;
var fout = document.getElementById('funout');
var fn = 0;

function funNum() {
  fn++;
  fout.innerHTML = fn;
}

//      Задача 5. Создайте функцию, которая получает два параметра – число и степень числа. Используя Math.Pow внутри функции, возведите число в степень и выведите с помощью alert.

document.getElementById('btn3').onclick = showStep;

function showStep() {
  var num = document.getElementById('number').value;
  num = parseInt(num);
  var step = document.getElementById('stepnum').value;
  step = parseInt(step);
  alert(Math.pow(num, step));
}

//      Задача 6. Создайте функцию, которая принимает один параметр – строку, которая содержит тег. При вызове функции, она подчеркивает все элементы на странице с данным тегом. Т.е. если пользователь вызвал функцию с параметром ‘p’ – то подчеркиваются абзацы.

document.getElementById('btnunderline').onclick = underlineTag;

function underlineTag() {
  var str = document.getElementById('stringtag').value;
  var name = document.getElementsByTagName(str);
  for (var i = 0; i < name.length; i++) {
    name[i].style.textDecoration = 'underline';
  }
}

//      Задача 7. Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
//      Задача 8. Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

document.getElementById('agestart').onclick = ageFunc;
var aout = document.getElementById('ageout');

function ageFunc() {
  var agen = document.getElementById('agenumber').value;
  agen = parseInt(agen);
  if (agen >= 16) {
    aout.innerHTML = 'Добро пожаловать';
  } else if (agen < 16) {
    aout.innerHTML = 'Вы еще молоды';
  } else {
    aout.innerHTML = 'Введите возраст';
  }
  //aout.innerHTML = (agen > 16) ? 'Добро пожаловать' : 'Вы еще молоды';
}

//      Задача 9. Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.

document.getElementById('masstart').onclick = showMas;

function showMas() {
  var masinp = document.getElementById('maslong').value;
  alert(masinp.length);
}

//    Задача 10. Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.

document.getElementById('num10').onclick = function() {
  document.getElementById('out101').innerHTML = returnNum();
}

function returnNum() {
  var inpnum = document.getElementById('inp10').value;
  inpnum = parseInt(inpnum);
  if (inpnum > 10) {
    return inpnum * inpnum;
  } else if (inpnum < 7) {
    return ('число меньше 7');
  } else {
    return inpnum;
  }
}

//    Задача 11. Напишите игру «Угадай число». При загрузке страницы генерируется случайное число от 0 до 10. Пользователю дается три попытки угадать число (число вводиться в input). При каждой проверке выдается подсказка: больше или меньше. При угадывании, завершении числа попыток выдается оповещение. Количество попыток выводиться на экран.

var prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
// tempOut = document.getElementById('temp-out');
// tempOut.innerHTML = prNum;
console.log(prNum);

function funGame() {
  var num, out;

  num = document.getElementById('mynum').value;
  out = document.getElementById('out');

  if (num == prNum) {
    out.innerHTML = 'congratulation';
  } else if (num > prNum) {
    out.innerHTML = 'number is MORE than necessary';
  } else {
    out.innerHTML = 'number is less than necessary';
  }
}
