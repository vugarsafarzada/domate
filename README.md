# Domate

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

3. **CDN (Coming Soon)**:
   CDN support is not currently available but may be added in the future.

## Usage

Domate provides a simple yet powerful API. Below is an example of creating a fully JavaScript-driven web page:

### Example: Building a Simple Web Page

```javascript
// Create the body container
const body = new Container();
const { pixel, percentage, viewHeight } = body;

// Create other containers
const main = new Container(document.createElement("main"));
const header = new Container(document.createElement("header"));
const footer = new Container(document.createElement("footer"));
const sidebar = new Container(document.createElement("aside"));
const content = new Container(document.createElement("div"));

// Body setup
body.addChild(header.element);
body.addChild(main.element);
body.addChild(footer.element);
body.setHeight(viewHeight(100));
body.setStyle({
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

// Main setup
main.addChild(sidebar.element);
main.addChild(content.element);
main.setBGColor("#fff");
main.setWidth(percentage(100));
main.setHeight(percentage(80));
main.setStyle({
  display: "flex",
  flexDirection: "row",
});

// Header setup
header.setBGColor("#eee");
header.setWidth(percentage(100));
header.setHeight(percentage(6));
header.setText("Header Area");

// Footer setup
footer.setBGColor("#333");
footer.setWidth(percentage(100));
footer.setHeight(percentage(13));
footer.setText("Footer Area");
footer.setStyle({
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Sidebar setup
sidebar.setBGColor("#f5f5f5");
sidebar.setWidth(percentage(20));
sidebar.setHeight(percentage(100));

// Content setup
content.setBGColor("#fff");
content.setWidth(percentage(80));
content.setHeight(percentage(100));
content.setText(
  "DOM manipulation with JavaScript has never been easier! Domate combines style, animation, and structure management in a single library."
);
content.setStyle({
  padding: pixel(100),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: pixel(16),
  lineHeight: "1.5",
});

// Add animation
content.animationQueue(
  [
    () => content.setStyle({ opacity: "0.5" }),
    () => content.setStyle({ opacity: "1" }),
  ],
  { speed: 2000, stopLoop: false }
);
```

This code creates a responsive web page with a header, sidebar, content area, and footer. It also includes an opacity animation in the content area.

### API Reference

#### `DOMElement` Class
Provides core DOM manipulation functionality.

- **Methods**:
  - `pixel(value)`: Converts a number to pixel units (e.g., `"100px"`).
  - `percentage(value)`: Converts a number to percentage units (e.g., `"50%"`).
  - `viewWidth(value)`: Converts a number to viewport width units (e.g., `"50vw"`).
  - `viewHeight(value)`: Converts a number to viewport height units (e.g., `"50vh"`).
  - `setId(id)`: Sets the element's ID.
  - `setBGColor(color)`: Sets the background color (default: `"#000"`).
  - `setWidth(value)`: Sets the width (default: `"100px"`).
  - `setHeight(value)`: Sets the height (default: `"100px"`).
  - `setPosition({ x, y })`: Sets the position (default: `{ x: 0, y: 0 }`).
  - `setStyle(styles)`: Applies multiple styles (e.g., `{ display: "flex" }`).
  - `animationQueue(order, options)`: Runs a sequential animation queue.

#### `Container` Class
Extends `DOMElement` and adds child element management.

- **Methods**:
  - `addChild(child)`: Adds a child element.
  - `removeChild(index)`: Removes a child element at the specified index.

## Contributing

Want to contribute to Domate? Follow these steps:

1. Fork the repository: `https://github.com/vugarsafarzada/domate`
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push your branch: `git push origin feature/your-feature`
5. Open a Pull Request.

Please ensure your contributions adhere to the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for details.

## Contact

For questions or suggestions:
- GitHub Issues: [Open a new issue](https://github.com/vugarsafarzada/domate/issues)
- Email: vuqarsfrzad@gmail.com

Enjoy building modern, dynamic web applications with Domate!
