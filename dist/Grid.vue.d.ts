import { PropType } from "vue";
import { PageProvider } from "./pipeline";
import { VueInstance } from "@vueuse/core";
declare const _default: import("vue").DefineComponent<{
    length: {
        type: PropType<number>;
        required: true;
        validator: (value: number) => boolean;
    };
    pageProvider: {
        type: PropType<PageProvider>;
        required: true;
    };
    pageSize: {
        type: PropType<number>;
        required: true;
        validator: (value: number) => boolean;
    };
    scrollTo: {
        type: PropType<number>;
        required: false;
        validator: (value: number) => boolean;
    };
}, {
    rootRef: import("vue").Ref<HTMLElement | SVGElement | VueInstance | undefined>;
    probeRef: import("vue").Ref<HTMLElement | SVGElement | VueInstance | undefined>;
    buffer: Readonly<import("vue").Ref<import("./pipeline").InternalItem[]>>;
    contentHeight: Readonly<import("vue").Ref<number>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    length?: unknown;
    pageProvider?: unknown;
    pageSize?: unknown;
    scrollTo?: unknown;
} & {
    length: number;
    pageProvider: PageProvider;
    pageSize: number;
} & {
    scrollTo?: number | undefined;
}>, {}>;
export default _default;
