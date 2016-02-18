// Definitions for Flickity v1.1.1 
// Project: http://flickity.metafizzy.co/
// Repository:  https://github.com/metafizzy/flickity
// Definitions by: Chris McGrath <https://github.com/clmcgrath/>



interface JQuery {
    /**
    * initialize fickity plugin
    */
    flickity: IFlickityJquery;
}

interface IFlickityJquery {
    (options?: IFlickityOptions): JQuery;
    (command: string, ...params: any[]): JQuery;
}

declare class Flickity {
    /**
    * Initializes an new instance of Flickity .
    * 
    * @param element Element selector string
    * @param options (IFlickityOptions) Flickity options
    */
    constructor(selector: string, options?: IFlickityOptions);
    /**
    * Initializes an new instance of Flickity .
    * 
    * @param element Container Element to initialize Flickity on 
    * @param options (IFlickityOptions) Flickity options
    */
    constructor(element: Element, options?: IFlickityOptions);

    //properties

    /**
    * @type integer
    * The selected cell index.
    */
    selectedIndex: number;

    /**
    * @type Element
    * The selected cell element.
    */
    selectedElement: Element;

    /**
    * @type Element[] 
    * The array of cells. Use cells.length for the total number of cells.
    */
    cells: Element[];

    // static methods 

    /**
    * (static) Get the Flickity instance via selector.
    * 
    * @param element Element selector string
    */
    static data(element: string): Flickity;

    /**
    * (static) Get the Flickity instance via its element.
    * 
    * @param element The element
    */
    static data(element: Element): Flickity;


    // instance methods 

    /**
    * Select a cell.
    * 
    * @param index Integer Zero-based index of the cell to select.
    * @param isWrapped (Optional) If true, the last cell will be selected if at the first cell.
    * @param isInstant (Optional) If true, immediately view the selected cell without animation.
    */
    select(index: number, isWrapped?: boolean, isInstant?: boolean): void;

    /**
    * Select the previous cell.
    * 
    * @param isWrapped (Optional) If true, the first cell will be selected if at the last cell.
    */
    previous(isWrapped?: boolean): void;

    /**
    * Select the next cell.
    * @param isWrapped (Optional) If true, the first cell will be selected if at the first cell.
    */
    next(isWrapped?: boolean): void;

    /**
    * Resize the gallery and re-position cells.
    */
    resize(): void;

    /**
    * Position cells at selected position. 
    * Trigger reposition after the size of a cell has been changed.
    */
    reposition(): void;

    /**
    * Prepend elements and create cells to the beginning of the gallery.
    *
    * @param elements JQuery, Element[], Element, or NodeList
    */
    prepend(elements: Element | NodeList): void;

    /**
    * Append elements and create cells to the end of the gallery.
    *
    * @param elements JQuery, Element[], Element, or NodeList
    */
    append(elements: Element | NodeList): void;

    /**
    * Insert elements into the gallery and create cells.
    * 
    * @param elements Element[], Element, or NodeList
    * @param index Integer: Zero-based index to insert elements.
    */
    insert(elements: Element[] | Element | NodeList, index: number): void;

    /**
    * Remove cells from gallery and remove elements from DOM.
    * 
    * @param elements Element[], Element, or NodeList
    */
    remove(elements: Element[] | Element | NodeList): void;

    /**
    * Remove Flickity functionality completely. destroy will return the element back to its pre-initialized state.
    */
    destroy(): void;

    /**
    * Re-collect all cell elements in flickity-slider.
    */
    reloadCells(): void;

    /**
    * Get the elements of the cells.
    * @returns  Element[]
    */
    getCellElements() : Element[];

    //event listeners

    /**
    * Add new classic event listener 
    */
    listener(...params: any[]): void;

    /**
    * bind event listener
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    on(eventname: string, callback: (eventt?: Event, cellElement?: Element) => any);
    /**
    * bind event listener
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    on(eventname: string, callback: (event?: Event, pointer?: Element | Touch) => any);
    /**
    * bind event listener
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    on(eventname: string, callback: (event?: Event, pointer?: Element | Touch, moveVector?: Object) => any);
    /**
    * bind event listener
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    on(eventname: string, callback: (event?: Event, pointer?: Element | Touch, cellElement?: Element, cellIndex?: number) => any);

    /**
    * Remove event listener 
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    off(eventname: string, callback: (event?: Event, cellElement?: Element) => any);
    
    /**
    * Remove event listener 
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    off(eventname: string, callback: (event?: Event, pointer?: Element | Touch) => any);
    
    /**
    * Remove event listener 
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    off(eventname: string, callback: (event?: Event, pointer?: Element | Touch, moveVector?: Object) => any);

    /**
    * Remove event listener 
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    off(eventname: string, callback: (event?: Event, pointer?: Element | Touch, cellElement?: Element, cellIndex?: number) => any);


    /**
    * one time event handler
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    once(eventname: string, callback: (event?: Event, cellElement?: Element) => any);
 
    /**
    * one time event handler
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    once(eventname: string, callback: (event?: Event, pointer?: Element | Touch) => any);

    /**
    * one time event handler
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    once(eventname: string, callback: (event?: Event, pointer?: Element | Touch, moveVector?: Object) => any);

    /**
    * one time event handler
    * @param eventName name of event  (@see FlickityEvents class for filckity supported events)
    * @param callback callback funtion to execute when event fires 
    */
    once(eventname: string, callback: (event?: Event, pointer?: Element | Touch, cellElement?: Element, cellIndex?: number) => any);


}

interface IFlickityOptions {

    /**
    * Specify selector for cell elements. cellSelector is useful if you have other elements in your gallery elements that are not cells.
    * 
    * default: '.gallery-cell'
    */
    cellSelector?: string;

    /**
    * Zero-based index of the initial selected cell.
    * 
    * default: 
    */
    initialIndex?: number;

    /**
    * Enable keyboard navigation. Users can tab to a Flickity gallery, and pressing left & right keys to change cells. 
    * 
    * default: true
    */
    accessibility?: boolean;

    /**
    * Sets the height of the gallery to the height of the tallest cell.  Set to  false if you prefer to size the gallery with CSS, rather than using the size of cells.
    * 
    * default: true
    */
    useSetGallerySize?: boolean;

    /**
    * Adjusts sizes and positions when window is resized.
    * 
    * default: true
    */
    resize?: boolean;

    /**
    * Align cells within the gallery element.
    * opttions: 'left', 'center', 'right' 
    * 
    * default: 'center'
    */
    cellAlign?: string;

    /**
    * Contains cells to gallery element to prevent excess scroll at beginning or end. Has no effect if wrapAround is enabled
    * 
    * default: true
    */
    contain?: boolean;

    /**
    * Unloaded images have no size, which can throw off cell positions. To fix this, the imagesLoaded option re-positions cells once their images have loaded.
    * 
    * default: true
    */
    imagesLoaded?: boolean;

    /**
    * Sets positioning in percent values, rather than pixel values. If your cells do not have percent widths, we recommended percentPosition: false.
    * 
    * default: false
    */
    percentPosition?: boolean;

    /**
    * Enables right-to-left layout.
    * 
    * default: false
    */
    rightToLeft?: boolean;

    /**
    * Enables dragging and flicking
    * 
    * default: true
    */
    draggable?: boolean;

    /**
    * Enables content to be freely scrolled and flicked without aligning cells to an end position.
    * Enable freeScroll and wrapAround and you can flick forever, man. 
    * 
    * default: false
    */
    freeScroll?: boolean;

    /**
    * At the end of cells, wrap-around to the other end for infinite scrolling.
    * 
    * default: false
    */
    wrapAround?: boolean;

    /**
    * Loads cell images when a cell is selected.
    * Set the image's URL to load with data-flickity-lazyload.
    * 
    * default: false
    */
    lazyLoad?: boolean | number;

    /**
    * 
    * 
    * default: 
    */
    autoPlay?: boolean | number;

    /**
    * 
    * 
    * default: 
    */
    watchCSS?: boolean | string;

    /**
    * 
    * 
    * default: 
    */
    asNavFor?: string;

    /**
    * 
    * 
    * default: 
    */
    selectedAttraction?: number;

    /**
    * 
    * 
    * default: 
    */
    friction?: number;

    /**
    * 
    * 
    * default: 
    */
    freeScrollFriction?: number;

    /**
    * 
    * 
    * default: 
    */
    prevNextButtons?: boolean;

    /**
    * 
    * 
    * default: 
    */
    pageDots?: boolean;

    /**
    * 
    * 
    * default: 
    */
    arrowShape?: any[] | string;

}
