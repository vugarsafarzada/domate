export declare class DOMElement {
    #private;
    element: HTMLElement;
    constructor(element?: HTMLElement);
    /**
     * Converts a value to pixel format.
     * @param {number} value - The value to convert.
     * @returns {string} The value in pixel format (e.g., "10px").
     */
    pixel(value: any): string;
    /**
     * Converts a value to percentage format.
     * @param {number} value - The value to convert.
     * @returns {string} The value in percentage format (e.g., "50%").
     */
    percentage(value: any): string;
    /**
     * Converts a value to viewport width format.
     * @param {number} value - The value to convert.
     * @returns {string} The value in viewport width format (e.g., "50vw").
     */
    viewWidth(value: any): string;
    /**
     * Converts a value to viewport height format.
     * @param {number} value - The value to convert.
     * @returns {string} The value in viewport height format (e.g., "50vh").
     */
    viewHeight(value: any): string;
    /**
     * Converts a value to seconds format.
     * @param {number} value - The value to convert.
     * @returns {string} The value in seconds format (e.g., "1s").
     */
    seconds(value: any): string;
    /**
     * Sets the ID of the main element.
     * @param {string} id - The ID to set for the element.
     * @default id: "000"
     */
    setId(id: any): void;
    /**
     * Gets the ID of the main element.
     * @returns {string} The ID of the element.
     */
    getId(): string;
    /**
     * Sets the background color of the main element.
     * @param {string} color - The color to set as the background.
     * @default color: "#000" (black).
     */
    setBGColor(color?: string): void;
    /**
     * Gets the background color of the main element.
     * @returns {string} The background color of the element.
     */
    getBGColor(): string;
    /**
     * Sets the width of the main element.
     * @param {string} value - The width to set (in pixels or other units).
     * @default value: "100px".
     */
    setWidth(value?: string): void;
    /**
     * Gets the width of the main element.
     * @returns {number} The width of the element in pixels.
     */
    getWidth(): number;
    /**
     * Sets the height of the main element.
     * @param {string} value - The height to set (in pixels or other units).
     * @default value: "100px".
     */
    setHeight(value?: string): void;
    /**
     * Gets the height of the main element.
     * @returns {number} The height of the element in pixels.
     */
    getHeight(): number;
    /**
     * Sets both the width and height of the main element.
     * @param {string} value - The size to set for both width and height (in pixels or other units).
     * @default value: undefined.
     */
    setSize(value: any): void;
    /**
     * Gets the size (area) of the main element.
     * @returns {number} The area of the element (width * height).
     */
    getSize(): number;
    /**
     * Sets the position of the main element.
     * @param {object} coordinates - The position to set.
     * @param {number} coordinates.x - The horizontal position (left).
     * @param {number} coordinates.y - The vertical position (top).
     * @default {x: 0, y: 0}
     */
    setPosition(coordinates?: {
        x: number;
        y: number;
    }): void;
    /**
     * Gets the position coordinates of the main element.
     * @returns {object} The position of the element with x and y values.
     */
    getPosition(): {
        x: number;
        y: number;
    };
    /**
     * Sets the transition duration speed of the main element.
     * @param {number} value - The transition duration in milliseconds.
     * @default value: 1000ms (1 second).
     */
    setTransitionDuration(value?: number): void;
    /**
     * Gets the transition duration speed of the main element.
     * @returns {string} The transition duration (e.g., "1s").
     */
    getTransitionDuration(): string;
    /**
     * Sets the inner text of the main element.
     * @param {string} value - The text to set as the inner content of the element.
     * @default value: "Hello world".
     */
    setText(value: any): void;
    /**
     * Gets the inner text of the main element.
     * @returns {string} The inner text of the element.
     */
    getText(): string;
    /**
     * Sets the inner html of the main element.
     * @param {Array} value - The html to set as the inner content of the element.
     * @default value: [].
     */
    setHTML(value?: any[]): void;
    /**
     * Gets the inner html of the main element.
     * @returns {string} The inner html of the element.
     */
    getHTML(): string;
    /**
     * Sets the inner text of the main element.
     * @param {string} value - The text to set as the inner content of the element.
     * @default value: "1000".
     */
    setTitle(value: any): void;
    /**
     * Gets the inner text of the main element.
     * @returns {string} The inner text of the element.
     */
    getTitle(): string;
    animationQueue(order?: any[], options?: {
        stopLoop: boolean;
        speed: number;
        every: () => void;
    }): void;
    setStyle(styles?: {}): void;
}
export declare class Container extends DOMElement {
    element: any;
    children: HTMLElement[];
    constructor(element?: HTMLBodyElement);
    /**
     * To add a child under the main element
     * @param {HTMLElement} child
     * @default undefined
     */
    addChild(child: HTMLElement): void;
    /**
     * To remove a child under the main element
     * @param {number} index
     * @default undefined
     */
    removeChild(index: any): void;
}
