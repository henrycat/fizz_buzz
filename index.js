for (var i = 1; i < 101; i++) {

  var printedValue = '';
  var classes = '';
  var itIsDivisibleByThree = (i % 3 == 0);
  var itIsDivisibleByFive = (i % 5 == 0);

  if (itIsDivisibleByThree) {
    printedValue = printedValue + "Fizz";
    classes = 'fizz'
  }
  if (itIsDivisibleByFive) {
    printedValue = printedValue + "Buzz";
    classes += ' buzz';
  }
  if ( (!itIsDivisibleByThree)   && !itIsDivisibleByFive) {
    printedValue = i;
  }
  console.log({
    'i': i,
    'printedValue': printedValue,
    'itIsDivisibleByThree': itIsDivisibleByThree,
    'itIsDivisibleByFive': itIsDivisibleByFive,

  });
  $('body').append('<div class="item ' + classes + '">' + printedValue + '</div>')
}