"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerResponse_1 = require("../../lib/ServerResponse");
exports.default = {
    createSuccess() {
        return new ServerResponse_1.ServerResponse({ success: true });
    },
    createSuccessByData(data) {
        return new ServerResponse_1.ServerResponse({ success: true, data });
    },
    createSuccessByMessage(msg) {
        return new ServerResponse_1.ServerResponse({ success: true, msg });
    },
    createSuccessByDataAndMessage(data, msg) {
        return new ServerResponse_1.ServerResponse({ success: true, data, msg });
    },
    createError() {
        return new ServerResponse_1.ServerResponse({ success: false });
    },
    createErrorByCode(err_code) {
        return new ServerResponse_1.ServerResponse({ success: false, err_code });
    },
    createErrorByMessage(err_msg) {
        return new ServerResponse_1.ServerResponse({ success: false, err_msg });
    },
    createErrorByCodeAndMessage(err_code, err_msg) {
        return new ServerResponse_1.ServerResponse({ success: false, err_code, err_msg });
    }
};
