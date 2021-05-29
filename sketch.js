//variables
var n1,n2
var num1,num2;
var pluss
var subb
var multi
var div
//funtion setup
function setup(){
createCanvas(500,600);
//var num1
num1 = createInput();
num1.position(100,100)
//var num2
num2 = createInput();
num2.position(350,100)
//pluss
pluss = createButton("add");
pluss.position(270,100);
pluss.mousePressed(add);
//subbbbb
subb = createButton("sub");
subb.position(270,125);
subb.mousePressed(sub);
//multi
multi = createButton("multi");
multi.position(270,150);
multi.mousePressed(multii);
//div
div = createButton("div");
div.position(270,175);
div.mousePressed(divv);

}
function draw(){
//background("green");
n1 = parseInt(num1.value());
n2 = parseInt(num2.value());
}
function add(){
console.log(n1+n2);
}
function sub(){
  console.log(n1-n2);
  }
  function multii(){
    console.log(n1*n2);
    }
    function divv(){
      console.log(n1/n2);
      }