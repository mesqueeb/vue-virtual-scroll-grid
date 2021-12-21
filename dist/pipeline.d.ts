import { Observable } from "rxjs";
export declare function computeHeightAboveWindowOf(el: Element): number;
interface GridMeasurement {
    colGap: number;
    rowGap: number;
    columns: number;
}
export declare function getGridMeasurement(rootEl: Element): GridMeasurement;
interface ResizeMeasurement {
    rowGap: number;
    columns: number;
    itemHeightWithGap: number;
    itemWidthWithGap: number;
}
export declare function getResizeMeasurement(rootEl: Element, { height, width }: DOMRectReadOnly): ResizeMeasurement;
interface BufferMeta {
    bufferedOffset: number;
    bufferedLength: number;
}
export declare const getBufferMeta: (windowInnerHeight?: number) => (heightAboveWindow: number, { columns, rowGap, itemHeightWithGap }: ResizeMeasurement) => BufferMeta;
export declare function getObservableOfVisiblePageNumbers({ bufferedOffset, bufferedLength }: BufferMeta, length: number, pageSize: number): Observable<number>;
interface ItemsByPage {
    pageNumber: number;
    items: unknown[];
}
export declare type PageProvider = (pageNumber: number, pageSize: number) => Promise<unknown[]>;
export declare function callPageProvider(pageNumber: number, pageSize: number, pageProvider: PageProvider): Promise<ItemsByPage>;
export declare function accumulateAllItems(allItems: unknown[], [{ pageNumber, items }, length]: [ItemsByPage, number]): unknown[];
export interface InternalItem {
    index: number;
    value: unknown | undefined;
    style?: {
        transform: string;
        gridArea: string;
    };
}
export declare function getVisibleItems({ bufferedOffset, bufferedLength }: BufferMeta, { columns, itemWidthWithGap, itemHeightWithGap }: ResizeMeasurement, allItems: unknown[]): InternalItem[];
export declare function accumulateBuffer(buffer: InternalItem[], visibleItems: InternalItem[]): InternalItem[];
export declare function getContentHeight({ columns, rowGap, itemHeightWithGap }: ResizeMeasurement, length: number): number;
interface PipelineInput {
    length$: Observable<number>;
    pageProvider$: Observable<PageProvider>;
    pageSize$: Observable<number>;
    itemRect$: Observable<DOMRectReadOnly>;
    rootResize$: Observable<Element>;
    scroll$: Observable<Element>;
    scrollTo$: Observable<number | undefined>;
}
interface PipelineOutput {
    buffer$: Observable<InternalItem[]>;
    contentHeight$: Observable<number>;
    windowScrollTo$: Observable<number>;
}
export declare function pipeline({ length$, pageProvider$, pageSize$, itemRect$, rootResize$, scroll$, scrollTo$, }: PipelineInput): PipelineOutput;
export {};
