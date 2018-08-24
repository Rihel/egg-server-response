export interface ServerResponseOption < T > {
  success: boolean;
  data?: T;
  err_code?: number;
  err_msg?: string;
  msg?: string;
}
export class ServerResponse < T > {
  public success : boolean;
  public data?: T;
  public err_code?: number;
  public err_msg?: string;
  public msg?: string;
  constructor({success, data, err_code, err_msg, msg} : ServerResponseOption < T >) {
    this.success = success;
    if (data) 
      this.data = data;
    if (err_code) 
      this.err_code = err_code;
    if (err_msg) 
      this.err_msg = err_msg;
    if (msg) 
      this.msg = msg;
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        const val = this[key];
        if (!val) {
          delete this[key]
        }
      }
    }
  }
  public getData() : T | any {return this.data;}
  public isSuccess() : boolean {return this.success;}
}