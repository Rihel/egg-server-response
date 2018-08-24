import { ServerResponse } from '../../lib/ServerResponse';
declare const _default: {
    createSuccess(): ServerResponse<any>;
    createSuccessByData<T>(data: T): ServerResponse<T>;
    createSuccessByMessage(msg: string): ServerResponse<any>;
    createSuccessByDataAndMessage<T>(data: T, msg: string): ServerResponse<T>;
    createError(): ServerResponse<any>;
    createErrorByCode(err_code: number): ServerResponse<any>;
    createErrorByMessage(err_msg: string): ServerResponse<any>;
    createErrorByCodeAndMessage(err_code: number, err_msg: string): ServerResponse<any>;
};
export default _default;
