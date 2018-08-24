export interface ServerResponseOption<T> {
    success: boolean;
    data?: T;
    err_code?: number;
    err_msg?: string;
    msg?: string;
}
export declare class ServerResponse<T> {
    success: boolean;
    data?: T;
    err_code?: number;
    err_msg?: string;
    msg?: string;
    constructor({success, data, err_code, err_msg, msg}: ServerResponseOption<T>);
    getData(): T | any;
    isSuccess(): boolean;
}
