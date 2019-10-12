declare type Listener = (...payload: any) => void;
export default class MiniEvent {
    private _listenersMap;
    constructor();
    on(evnetName: string, linstener: Listener): MiniEvent;
    emit(evnetName: string, ...payload: any): boolean;
}
export {};
