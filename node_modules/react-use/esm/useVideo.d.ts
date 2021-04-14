/// <reference types="react" />
declare const useVideo: (elOrProps: import("./factory/createHTMLMediaHook").HTMLMediaProps | import("react").ReactElement<import("./factory/createHTMLMediaHook").HTMLMediaProps, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>) => [import("react").ReactElement<import("./factory/createHTMLMediaHook").HTMLMediaProps, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>, import("./factory/createHTMLMediaHook").HTMLMediaState, import("./factory/createHTMLMediaHook").HTMLMediaControls, {
    current: HTMLAudioElement | null;
}];
export default useVideo;
