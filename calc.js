// function test () {
//
// debugger;

var input = [];
var nextOperation = '';
var temp = 0;
var answer = 0;
var flag = false; //for changing operator functionality
var flagEqual = false; //to allow clear when putting number after equal

function operate() {
  if (nextOperation === '+') {
    answer += temp;
  } else if (nextOperation === '*') {
    answer *= temp;
  } else if (nextOperation === '-') {
    answer -= temp;
  } else if (nextOperation === '/') {
    answer /= temp;
  } else {
    answer = temp;
  }
}

function equalOpClear() {
  if (flagEqual) {
    input = [];
    temp = 0;
    answer = 0;
    nextOperation = '';
    $('#temp').text(0);
    $('#operator').text('');
    flagEqual = false;
  }
}

$('#1').click(function () {
  equalOpClear();
  input.push(1);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#2').click(function () {
  input.push(2);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#3').click(function () {
  input.push(3);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#4').click(function () {
  input.push(4);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#5').click(function () {
  input.push(5);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#6').click(function () {
  input.push(6);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#7').click(function () {
  input.push(7);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#8').click(function () {
  input.push(8);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#9').click(function () {
  input.push(9);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#0').click(function () {
  input.push(0);
  $('#answer').text(Number(input.join('')));
  flag = true;
})

$('#plus').click(function () {
  if (flag) {
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [];
    $('#temp').text(answer);
    $('#answer').text('0');
  }
  nextOperation = '+';
  $('#operator').text('+');
  flag = false;
})

$('#multiply').click(function () {
  if (flag) {
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [];
    $('#temp').text(answer);
    $('#answer').text('0');
  }
  nextOperation = '*';
  $('#operator').text('*');
  flag = false;
})

$('#minus').click(function () {
  if (flag) {
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [];
    $('#temp').text(answer);
    $('#answer').text('0');
  }
  nextOperation = '-';
  $('#operator').text('-');
  flag = false;
})

$('#divide').click(function () {
  if (flag) {
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [];
    $('#temp').text(answer);
    $('#answer').text('0');
  }
  nextOperation = '/';
  $('#operator').text('/');
  flag = false;
})

$('#equal').click(function () {
  if (nextOperation === '+') answer += Number(input.join(''));
  if (nextOperation === '*') answer *= Number(input.join(''));
  if (nextOperation === '-') answer -= Number(input.join(''));
  if (nextOperation === '/') answer /= Number(input.join(''));
  $('#answer').text(answer);
  $('#operator').text('=');
  $('#temp').text('');
  temp = answer;
  nextOperation = '=';
  flagEqual = true;
})

$('#clear').click(function () {
  answer = 0;
  temp = 0;
  nextOperation = '';
  input = [];
  $('#answer').text(0);
  $('#temp').text(0);
  $('#operator').text('');
})

$('#delete').click(function () {
  input.pop();
  $('#answer').text(Number(input.join('')));
})

// }
