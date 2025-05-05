import { Container, DOMElement } from "../dist/script.js";

// Example Usage:
const body = new Container();
const app = new Container(document.getElementById('app'));
const { 
    pixel, 
    percentage, 
    viewHeight, 
    viewWidth,
    seconds
} = body;
body.setWidth(viewWidth(100))
body.setHeight(viewHeight(100))

body.setStyle({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
});


app.setSize(pixel(0));
app.setStyle({borderRadius: percentage(100)})
app.setBGColor('red');
app.setTransitionDuration(0.5);

const getRandomBetween = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let count = 0
let toggle = true;
body.animationQueue([
    () => {
        app.setSize(pixel(count));
        app.setBGColor('white')
    
        app.setPosition({
            x: getRandomBetween(count * -1, count),
            y: getRandomBetween(count * -1, count)
        });
    },
    () => {
        app.setSize(pixel(1000 - count));
        app.setBGColor(`#${getRandomBetween(100, 999)}`)
        app.setPosition({
            x: (0),
            y: (0)
        });
        if(count > 1000 && toggle === true) {
          toggle = false
        }
        if(count < 1 && toggle === false) {
          toggle = true;
        }
    },
], {
    speed: 900,
    stopLoop: false,
    every: () => {
        if(toggle) {
          count = count + 10;
        } else {
          count = count - 10
        }
    }
});