// returns comma formated string of the quotient of two numbers
function DivisionStringified(num1, num2) {
  var div = Math.floor(num1 / num2);
  var str = div.toString();
  var answer = "";
  var count = 1;
  for (var i = str.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && count!== str.length) answer = "," + str[i] + answer; 
    else answer = str[i] + answer;
    count++;
  }
  return answer;
}
