declare module 'bootstrap' {
    export class Modal {
      constructor(element: HTMLElement, options?: any);
      toggle(): void;
      show(): void;
      hide(): void;
      handleUpdate(): void;
      static getInstance(element: HTMLElement): Modal;
    }
  }
  