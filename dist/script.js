var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DOMElement_orderIndex, _DOMElement_orderTId;
export class DOMElement {
    constructor(element = document.createElement("div")) {
        /**
         * Executes a sequence of animations or functions in order, with optional looping.
         * @param {Array<Function>} order - An array of functions (animations) to execute in order.
         * @param {object} options - Options for controlling the animation queue.
         * @param {boolean} [options.stopLoop=false] - Whether to stop the loop after completing the queue.
         * @param {number} [options.speed=1000] - The total speed for the animation queue (in milliseconds).
         * @param {Function} [options.every] - A function to execute after each step in the animation queue.
         */
        _DOMElement_orderIndex.set(this, 0);
        _DOMElement_orderTId.set(this, null);
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
        if (!coordinates || typeof coordinates.x !== 'number' || typeof coordinates.y !== 'number') {
            console.warn('Invalid coordinates, using default { x: 0, y: 0 }');
            coordinates = { x: 0, y: 0 };
        }
        this.element.style.top = coordinates.y.toString();
        this.element.style.left = coordinates.x.toString();
    }
    /**
     * Gets the position coordinates of the main element.
     * @returns {object} The position of the element with x and y values.
     */
    getPosition() {
        const style = window.getComputedStyle(this.element);
        return {
            x: parseFloat(style.left) || 0,
            y: parseFloat(style.top) || 0,
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
        if (!Array.isArray(value)) {
            console.warn('setHTML expects an array, received:', value);
            return;
        }
        this.element.innerHTML = value
            .filter((item) => item instanceof HTMLElement)
            .map((item) => item.outerHTML)
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
    animationQueue(order = [], options = { stopLoop: false, speed: 1000, every: () => { } }) {
        if (order && order.length) {
            // @ts-ignore
            clearTimeout(__classPrivateFieldGet(this, _DOMElement_orderTId, "f"));
            const speedPerItem = options.speed / order.length;
            const duration = speedPerItem / 1000;
            this.setTransitionDuration(duration);
            [...this.element.children].forEach((child) => {
                child.style.transitionDuration = this.seconds(duration);
            });
            if (__classPrivateFieldGet(this, _DOMElement_orderIndex, "f") < order.length) {
                const func = order[__classPrivateFieldGet(this, _DOMElement_orderIndex, "f")];
                // @ts-ignore
                __classPrivateFieldSet(this, _DOMElement_orderTId, setTimeout(() => {
                    var _a;
                    func();
                    if (options.every) {
                        // @ts-ignore
                        options.every(func);
                    }
                    __classPrivateFieldSet(this, _DOMElement_orderIndex, (_a = __classPrivateFieldGet(this, _DOMElement_orderIndex, "f"), _a++, _a), "f");
                    this.animationQueue(order, options);
                }, speedPerItem), "f");
            }
            else {
                if (!options.stopLoop) {
                    __classPrivateFieldSet(this, _DOMElement_orderIndex, 0, "f");
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
_DOMElement_orderIndex = new WeakMap(), _DOMElement_orderTId = new WeakMap();
export class Container extends DOMElement {
    constructor(element = document.getElementsByTagName("body")[0]) {
        super(element);
        this.children = [];
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
            this.children.splice(index, 1);
            this.element.removeChild(target);
        }
    }
}
