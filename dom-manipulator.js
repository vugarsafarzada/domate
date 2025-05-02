export class DOMElement {
  static element;
  constructor(element = document.createElement("div")) {
    this.element = element;
    this.element.style.fontFamily = "Arial";
    this.element.style.display = "inline-block";
    this.element.style.position = "relative";
    this.setPosition({ x: 0, y: 0 });
  }

  /**
   * Converts a value to pixel format.
   * @param {number} value - The value to convert.
   * @returns {string} The value in pixel format (e.g., "10px").
   */
  pixel(value) {
    return `${value}px`;
  }

  /**
   * Converts a value to percentage format.
   * @param {number} value - The value to convert.
   * @returns {string} The value in percentage format (e.g., "50%").
   */
  percentage(value) {
    return `${value}%`;
  }

  /**
   * Converts a value to viewport width format.
   * @param {number} value - The value to convert.
   * @returns {string} The value in viewport width format (e.g., "50vw").
   */
  viewWidth(value) {
    return `${value}vw`;
  }

  /**
   * Converts a value to viewport height format.
   * @param {number} value - The value to convert.
   * @returns {string} The value in viewport height format (e.g., "50vh").
   */
  viewHeight(value) {
    return `${value}vh`;
  }

  /**
   * Converts a value to seconds format.
   * @param {number} value - The value to convert.
   * @returns {string} The value in seconds format (e.g., "1s").
   */
  seconds(value) {
    return `${value}s`;
  }

  /**
   * Sets the ID of the main element.
   * @param {string} id - The ID to set for the element.
   * @default id: "000"
   */
  setId(id) {
    this.element.id = id;
  }

  /**
   * Gets the ID of the main element.
   * @returns {string} The ID of the element.
   */
  getId() {
    return this.element.id;
  }

  /**
   * Sets the background color of the main element.
   * @param {string} color - The color to set as the background.
   * @default color: "#000" (black).
   */
  setBGColor(color = "#000") {
    this.element.style.background = color;
  }

  /**
   * Gets the background color of the main element.
   * @returns {string} The background color of the element.
   */
  getBGColor() {
    return this.element.style.background;
  }

  /**
   * Sets the width of the main element.
   * @param {string} value - The width to set (in pixels or other units).
   * @default value: "100px".
   */
  setWidth(value = this.pixel(100)) {
    this.element.style.width = value;
  }

  /**
   * Gets the width of the main element.
   * @returns {number} The width of the element in pixels.
   */
  getWidth() {
    return this.element.clientWidth;
  }

  /**
   * Sets the height of the main element.
   * @param {string} value - The height to set (in pixels or other units).
   * @default value: "100px".
   */
  setHeight(value = this.pixel(100)) {
    this.element.style.height = value;
  }

  /**
   * Gets the height of the main element.
   * @returns {number} The height of the element in pixels.
   */
  getHeight() {
    return this.element.clientHeight;
  }

  /**
   * Sets both the width and height of the main element.
   * @param {string} value - The size to set for both width and height (in pixels or other units).
   * @default value: undefined.
   */
  setSize(value) {
    this.setWidth(value);
    this.setHeight(value);
  }

  /**
   * Gets the size (area) of the main element.
   * @returns {number} The area of the element (width * height).
   */
  getSize() {
    return this.element.clientWidth * this.element.clientHeight;
  }

  /**
   * Sets the position of the main element.
   * @param {object} coordinates - The position to set.
   * @param {number} coordinates.x - The horizontal position (left).
   * @param {number} coordinates.y - The vertical position (top).
   * @default {x: 0, y: 0}
   */
  setPosition(coordinates = { x: 0, y: 0 }) {
    this.element.style.top = coordinates.y;
    this.element.style.left = coordinates.x;
  }

  /**
   * Gets the position coordinates of the main element.
   * @returns {object} The position of the element with x and y values.
   */
  getPosition() {
    return {
      x: this.element.style.left,
      y: this.element.style.bottom,
    };
  }

  /**
   * Sets the transition duration speed of the main element.
   * @param {number} value - The transition duration in milliseconds.
   * @default value: 1000ms (1 second).
   */
  setTransitionDuration(value = 1000) {
    this.element.style.transitionDuration = this.seconds(value);
  }

  /**
   * Gets the transition duration speed of the main element.
   * @returns {string} The transition duration (e.g., "1s").
   */
  getTransitionDuration() {
    return this.element.style.transitionDuration;
  }

  /**
   * Sets the inner text of the main element.
   * @param {string} value - The text to set as the inner content of the element.
   * @default value: "Hello world".
   */
  setText(value) {
    this.element.innerText = value;
  }

  /**
   * Gets the inner text of the main element.
   * @returns {string} The inner text of the element.
   */
  getText() {
    return this.element.innerText;
  }

  /**
   * Sets the inner html of the main element.
   * @param {Array} value - The html to set as the inner content of the element.
   * @default value: [].
   */
  setHTML(value = []) {
    this.element.innerHTML = value
      .map(item => item.outerHTML)
      .join('');
  }

  /**
   * Gets the inner html of the main element.
   * @returns {string} The inner html of the element.
   */
  getHTML() {
    return this.element.innerHTML;
  }

  /**
   * Sets the inner text of the main element.
   * @param {string} value - The text to set as the inner content of the element.
   * @default value: "1000".
   */
  setTitle(value) {
    this.element.title = value;
  }

  /**
   * Gets the inner text of the main element.
   * @returns {string} The inner text of the element.
   */
  getTitle() {
    return this.element.title;
  }

  /**
   * Executes a sequence of animations or functions in order, with optional looping.
   * @param {Array<Function>} order - An array of functions (animations) to execute in order.
   * @param {object} options - Options for controlling the animation queue.
   * @param {boolean} [options.stopLoop=false] - Whether to stop the loop after completing the queue.
   * @param {number} [options.speed=1000] - The total speed for the animation queue (in milliseconds).
   * @param {Function} [options.every] - A function to execute after each step in the animation queue.
   */

  #orderIndex = 0;
  #orderTId = null;

  animationQueue(
    order = [],
    options = { stopLoop: false, speed: 1000, every: () => {} }
  ) {
    if (order && order.length) {
      clearTimeout(this.#orderTId);
      const speedPerItem = options.speed / order.length;
      const duration = speedPerItem / 1000;
      this.setTransitionDuration(duration);
      [...this.element.children].forEach(child => {
        child.style.transitionDuration = this.seconds(duration);
      })

      if (this.#orderIndex < order.length) {
        const func = order[this.#orderIndex];

        this.#orderTId = setTimeout(() => {
          func();
          if (options.every) {
            options.every(func);
          }
          this.#orderIndex++;
          this.animationQueue(order, options);
        }, speedPerItem);
      } else {
        if (!options.stopLoop) {
          this.#orderIndex = 0;
          this.animationQueue(order, options);
        }
      }
    }
  }

  setStyle(styles = {}) {
    for (const property in styles) {
      this.element.style[property] = styles[property];
    }
  }
}

export class Container extends DOMElement {
  element;
  children = [];
  constructor(element = document.getElementsByTagName("body")[0]) {
    super(element);
    this.element = element;
    this.setBGColor();
  }

  /**
   * To add a child under the main element
   * @param {HTMLElement} child
   * @default undefined
   */
  addChild(child) {
    this.children.push(child);
    this.element.appendChild(child);
  }

  /**
   * To remove a child under the main element
   * @param {number} index
   * @default undefined
   */
  removeChild(index) {
    const target = this.children[index];
    if (target) {
      this.children.splice(0, index);
      this.element.removeChild(target);
    }
  }
}