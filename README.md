# Domate
<div align="center">
    <br />
    <br />
    <p>
        <a href="https://www.npmjs.com/package/domate"><img src="https://img.shields.io/npm/v/domate?color=blue&label=version" alt="version" /></a>
        <a href="https://www.npmjs.com/package/domate"><img src="https://img.shields.io/npm/dt/domate" alt="downloads" /></a>
    </p>
    <p>
        <a href="https://www.npmjs.com/package/domate"><img src="https://nodei.co/npm/domate.png?downloads=true&downloadRank=true&stars=true" alt="information" /></a>
    </p>
</div>

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub Issues](https://img.shields.io/github/issues/vugarsafarzada/domate)
![GitHub Stars](https://img.shields.io/github/stars/vugarsafarzada/domate)

**Domate** is a lightweight and flexible JavaScript library that enables full control over the DOM with minimal HTML and CSS. Designed for developers building dynamic and programmatic web interfaces, it offers powerful features like style management, animation queues, and child element handling, making it ideal for modern web applications.

## Features

- **Modular Architecture**: Built with `DOMElement` and `Container` classes for an object-oriented approach.
- **Flexible Style Management**: Helper methods for pixels, percentages, viewport units, and bulk style application.
- **Animation Support**: Sequential animation queues with customizable transitions.
- **Child Element Management**: Simple API for adding and removing child elements.
- **Lightweight and Dependency-Free**: Works without external dependencies.
- **Intuitive API**: Chainable methods and readable code for a developer-friendly experience.

## Installation

To add Domate to your project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vugarsafarzada/domate.git
   ```

2. **Include the Library in Your Project**:
   Copy the library file (`script.js`) to your project and include it in your HTML file using a `<script>` tag:
   ```html
   <script src="path/to/script.js"></script>
   ```

3. **Install via npm**:

   ```bash
   npm install domate
   ```

4. **CDN** (Coming Soon):
   CDN support is not currently available but may be added in the future.

## Usage

Domate provides a simple yet powerful API. Below is an example of creating a fully JavaScript-driven web page:

### Example: Building a Simple Web Page

```javascript
import { Container, DOMElement } from "domate";

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
```

This code creates a responsive web page with a header, sidebar, content area, and footer. It also includes an opacity animation in the content area.

### API Reference

#### `DOMElement` Class

Provides core DOM manipulation functionality.

* **Methods**:

  * `pixel(value)`: Converts a number to pixel units (e.g., `"100px"`).
  * `percentage(value)`: Converts a number to percentage units (e.g., `"50%"`).
  * `viewWidth(value)`: Converts a number to viewport width units (e.g., `"50vw"`).
  * `viewHeight(value)`: Converts a number to viewport height units (e.g., `"50vh"`).
  * `setId(id)`: Sets the element's ID.
  * `setBGColor(color)`: Sets the background color (default: `"#000"`).
  * `setWidth(value)`: Sets the width (default: `"100px"`).
  * `setHeight(value)`: Sets the height (default: `"100px"`).
  * `setPosition({ x, y })`: Sets the position (default: `{ x: 0, y: 0 }`).
  * `setStyle(styles)`: Applies multiple styles (e.g., `{ display: "flex" }`).
  * `animationQueue(order, options)`: Runs a sequential animation queue.

#### `Container` Class

Extends `DOMElement` and adds child element management.

* **Methods**:

  * `addChild(child)`: Adds a child element.
  * `removeChild(index)`: Removes a child element at the specified index.

## Contributing

Want to contribute to Domate? Follow these steps:

1. Fork the repository: `https://github.com/vugarsafarzada/domate`
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push your branch: `git push origin feature/your-feature`
5. Open a Pull Request.

Please ensure your contributions adhere to the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

## Contact

For questions or suggestions:

* GitHub Issues: [Open a new issue](https://github.com/vugarsafarzada/domate/issues)
* Email: [vuqarsfrzad@gmail.com](mailto:vuqarsfrzad@gmail.com)

Enjoy building modern, dynamic web applications with Domate!