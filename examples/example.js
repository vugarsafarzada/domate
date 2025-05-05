import { Container } from "../src/script.js";

// Example Usage:
const body = new Container();
const { pixel, percentage, viewHeight } = body;

const main = new Container(document.createElement("main"));
const header = new Container(document.createElement("header"));
const footer = new Container(document.createElement("footer"));
const sidebar = new Container(document.createElement("aside"));
const content = new Container(document.createElement("div"));

// body area
body.addChild(header.element);
body.addChild(main.element);
body.addChild(footer.element);
body.setHeight(viewHeight(100));

// main area
main.addChild(sidebar.element);
main.addChild(content.element);
main.setBGColor("#fff");
main.setWidth(percentage(100));
main.setHeight(percentage(80));
main.setStyle({
  display: 'flex',
});

// header area
header.setBGColor("#eee");
header.setWidth(percentage(100));
header.setHeight(percentage(6));

// footer area
footer.setBGColor("#333");
footer.setWidth(percentage(100));
footer.setHeight(percentage(13));

// sidebar area
sidebar.setBGColor("#f5f5f5");
sidebar.setWidth(percentage(20));
sidebar.setHeight(percentage(100));

// content area
content.setBGColor("#fff");
content.setWidth(percentage(80));
content.setHeight(percentage(100));
content.setText('DOM manipulation with JavaScript has never been easier! Domate combines style, animation, and structure management in a single library.')
content.setStyle({
  padding: '0 100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});
