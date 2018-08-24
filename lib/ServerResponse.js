'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class ServerResponse {
  constructor({ success, data, err_code, err_msg, msg }) {
    this.success = success;
    if (data) { this.data = data; }
    if (err_code) { this.err_code = err_code; }
    if (err_msg) { this.err_msg = err_msg; }
    if (msg) { this.msg = msg; }
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        const val = this[key];
        if (!val) {
          delete this[key];
        }
      }
    }
  }
  getData() { return this.data; }
  isSuccess() { return this.success; }
}
exports.ServerResponse = ServerResponse;
