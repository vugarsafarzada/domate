declare namespace Domate {
    class DOMElement {
      element: HTMLElement;
  
      constructor(element?: HTMLElement);
      
      pixel(value: number): string;
      percentage(value: number): string;
      viewWidth(value: number): string;
      viewHeight(value: number): string;
      seconds(value: number): string;
  
      setId(id: string): void;
      getId(): string;
      setBGColor(color: string): void;
      getBGColor(): string;
  
      setWidth(value: string): void;
      getWidth(): number;
      setHeight(value: string): void;
      getHeight(): number;
  
      setSize(value: string): void;
      getSize(): number;
  
      setPosition(coordinates: { x: number, y: number }): void;
      getPosition(): { x: number, y: number };
  
      setTransitionDuration(value: number): void;
      getTransitionDuration(): string;
  
      setText(value: string): void;
      getText(): string;
  
      setHTML(value: HTMLElement[]): void;
      getHTML(): string;
  
      setTitle(value: string): void;
      getTitle(): string;
  
      animationQueue(
        order: Function[],
        options: { stopLoop: boolean, speed: number, every?: Function }
      ): void;
  
      setStyle(styles: Record<string, string | number>): void;
    }
  
    class Container extends DOMElement {
      children: HTMLElement[];
  
      constructor(element?: HTMLElement);
  
      addChild(child: HTMLElement): void;
      removeChild(index: number): void;
    }
  }
  
  export = Domate;
  