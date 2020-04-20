import VirtualConsole from './VirtualConsole.js'

let vs

function preload() {

}


function setup() {
  createCanvas(640, 400);
  
  vs = new VirtualConsole(60,20, 8, 12, 'Courier Prime',12)
  vs.setOriginX(20)
  vs.setOriginY(20)

  vs.setBg('darkblue')
  vs.writeln("Hello, this should appear with default ink : white")
  
  vs.setInk('lightblue')
  vs.write("Let's change color to blue...")

  vs.setInk('yellow')
  vs.writeln("    then to yellow")
  vs.writeln("Default behavior > stay on the same line ('write')")
  vs.setInk('lightgreen')
  vs.writeln("But 'writenln' goes to the next line")
  vs.writeln('')
  vs.setInk('pink')
  vs.writeln("Now some strange characters ████████ (unicode)!")

  vs.setInk('yellow')
  vs.gotoXY(8,12)
  vs.write("█< Adressing screen : this is pos 8,12")

  vs.gotoXY(1,13)
  for (let i=0; i<9 ; i++ ) vs.write("█")
  vs.write("< this is pos 9,13")

  for (let i=0; i<6 ; i++ ) {
    vs.gotoXY(i*10,16)
    vs.write(i.toString())
  
  }
  vs.writeln("")
  for (let i=0; i<6 ; i++ ) vs.write("0123456789")

  vs.gotoXY(0,19)
  vs.write("This is last line")
}

function draw() {
  background(200)

  vs.draw()
  
}

window.preload=preload
window.setup = setup
window.draw = draw

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}