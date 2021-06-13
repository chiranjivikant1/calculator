const input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("id", "input1");
document.body.appendChild(input1);

const button1 = document.createElement("button");
button1.setAttribute("id", "button1");
button1.setAttribute("onclick", "dis(1)");
document.body.append(button1);
document.querySelector("#button1").style = "width: 20%;";
document.querySelector("#button1").value = 1;
document.querySelector("#button1").innerText = 1;

const button2 = document.createElement("button");
button2.setAttribute("id", "button2");
button2.setAttribute("onclick", "dis(2)");
// document.querySelector("#button2").style= "width: 20%;";
// document.querySelector("#button2").style= "width: 20%";
document.body.appendChild(button2);
var button_val2 = (document.querySelector("#button2").value = 2);
document.querySelector("#button2").innerText = button_val2;

const button3 = document.createElement("button");
button3.setAttribute("id", "button3");
button3.setAttribute("onclick", "dis(3)");
document.body.appendChild(button3);
document.querySelector("#button3").style = "width: 20%;";
var button_val3 = (document.querySelector("#button3").value = 3);
document.querySelector("#button3").innerText = button_val3;

const divide = document.createElement("button");
divide.setAttribute("id", "divide");
divide.setAttribute("onclick", "dis('/')");
document.body.appendChild(divide);
document.querySelector("#divide").style = "width: 20%;";
document.querySelector("#divide").value = "/";
document.querySelector("#divide").innerText = "/";

const button4 = document.createElement("button");
button4.setAttribute("id", "button4");
button4.setAttribute("onclick", "dis(4)");
document.body.appendChild(button4);
document.querySelector("#button4").style = "width: 20%;";
var button_val4 = (document.querySelector("#button4").value = 4);
document.querySelector("#button4").innerText = button_val4;

const button5 = document.createElement("button");
button5.setAttribute("id", "button5");
button5.setAttribute("onclick", "dis(5)");
document.body.appendChild(button5);
document.querySelector("#button5").style = "width: 20%;";
var button_val5 = (document.querySelector("#button5").value = 5);
document.querySelector("#button5").innerText = button_val5;

const button6 = document.createElement("button");
button6.setAttribute("id", "button6");
button6.setAttribute("onclick", "dis(6)");
document.body.appendChild(button6);
document.querySelector("#button6").style = "width: 20%;";
var button_val6 = (document.querySelector("#button6").value = 6);
document.querySelector("#button6").innerText = button_val6;

const mul = document.createElement("button");
mul.setAttribute("id", "mul");
mul.setAttribute("onclick", "dis('*')");
document.body.appendChild(mul);
document.querySelector("#mul").style = "width: 20%;";
document.querySelector("#mul").value = "*";
document.querySelector("#mul").innerText = "*";

const button7 = document.createElement("button");
button7.setAttribute("id", "button7");
button7.setAttribute("onclick", "dis(7)");

document.body.appendChild(button7);
document.querySelector("#button7").style = "width: 20%;";
var button_val7 = (document.querySelector("#button7").value = 7);
document.querySelector("#button7").innerText = button_val7;

const button8 = document.createElement("button");
button8.setAttribute("id", "button8");
button8.setAttribute("onclick", "dis(8)");
document.body.appendChild(button8);
document.querySelector("#button8").style = "width: 20%;";
var button_val8 = (document.querySelector("#button8").value = 8);
document.querySelector("#button8").innerText = button_val8;

const button9 = document.createElement("button");
button9.setAttribute("id", "button9");
button9.setAttribute("onclick", "dis(9)");
document.body.appendChild(button9);
document.querySelector("#button9").style = "width: 20%;";
var button_val9 = (document.querySelector("#button9").value = 9);
document.querySelector("#button9").innerText = button_val9;

const minus = document.createElement("button");
minus.setAttribute("id", "minus");
minus.setAttribute("onclick", "dis('-')");
document.body.appendChild(minus);
document.querySelector("#minus").style = "width: 20%;";
document.querySelector("#minus").value = "-";
document.querySelector("#minus").innerText = "-";

const button0 = document.createElement("button");
button0.setAttribute("id", "button0");
button0.setAttribute("onclick", "dis(0)");
document.body.append(button0);
document.querySelector("#button0").style = "width: 20%;";
var button_val0 = (document.querySelector("#button0").value = 0);
document.querySelector("#button0").innerText = button_val0;

const dot = document.createElement("button");
dot.setAttribute("id", "dot");
dot.setAttribute("onclick", "dis('.')");
document.body.appendChild(dot);
document.querySelector("#dot").style = "width: 20%;";
document.querySelector("#dot").value = ".";
document.querySelector("#dot").innerText = ".";

const mod = document.createElement("button");
mod.setAttribute("id", "mod");
mod.setAttribute("onclick", "dis('%')");
document.body.appendChild(mod);
document.querySelector("#mod").style = "width: 20%;";
document.querySelector("#mod").value = "%";
document.querySelector("#mod").innerText = "%";

const plus = document.createElement("button");
plus.setAttribute("id", "plus");
plus.setAttribute("onclick", "dis('+')");
document.body.appendChild(plus);
document.querySelector("#plus").style = "width: 20%;";
document.querySelector("#plus").value = "+";
document.querySelector("#plus").innerText = "+";

const leftBr = document.createElement("button");
leftBr.setAttribute("id", "leftBr");
leftBr.setAttribute("onclick", "dis('(')");
document.body.appendChild(leftBr);
document.querySelector("#leftBr").style = "width: 20%;";
document.querySelector("#leftBr").value = "(";
document.querySelector("#leftBr").innerText = "(";

const rightBr = document.createElement("button");
rightBr.setAttribute("id", "rightBr");
rightBr.setAttribute("onclick", "dis(')')");
document.body.appendChild(rightBr);
document.querySelector("#rightBr").style = "width: 20%;";
document.querySelector("#rightBr").value = ")";
document.querySelector("#rightBr").innerText = ")";

const c = document.createElement("button");
c.setAttribute("id", "c");
c.setAttribute("onclick", "clear1()");
document.body.appendChild(c);
document.querySelector("#c").style = "width: 20%;";
document.querySelector("#c").value = "C";
document.querySelector("#c").innerText = "C";

const equal = document.createElement("button");
equal.setAttribute("id", "equal");
equal.setAttribute("onclick", "solve()");
document.body.appendChild(equal);
document.querySelector("#equal").style = "width: 20%;";
document.querySelector("#equal").value = "=";
document.querySelector("#equal").innerText = "=";

//function that display value
function dis(val) {
  if (checkzero(val)) {
    document.getElementById("input1").value += val;
  }
}

//function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("input1").value;
  let y = eval(x);
  if (y == undefined) {
    document.getElementById("input1").value = 0;
  } else document.getElementById("input1").value = y;
}

//function that clear the display
function clear1() {
  document.getElementById("input1").value = "";
}

function checkzero(val) {
  let str = document.getElementById("input1").value;
  if (str.length === 0 && val === 0) return false;

  return true;
}
