var student={
  name:"freya",
  class:7,
  fav_subject:"math",
  marks:[43,46,49,47,41]
}  
console.log(student.name)
console.log(student.class)
console.log(student.fav_subject)
console.log(student.marks)

var ball={
x:40,
y:30,
velocityX:2,
r:75,
velocityY:3,
color:["green","blue","pink","purple"]
}





function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
circle(ball.x,ball.y,ball.r)
fill(ball.color[2])
ball.x=ball.x+ball.velocityX
ball.y=ball.y+ball.velocityY
}