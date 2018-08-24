import { ServerResponse } from '../../lib/ServerResponse'
export default {
  createSuccess() : ServerResponse < any > {
    return new ServerResponse({success: true});
  },
  createSuccessByData < T > (data : T) : ServerResponse < T > {
    return new ServerResponse({success: true, data});
  },
  createSuccessByMessage(msg : string) : ServerResponse < any > {
    return new ServerResponse({success: true, msg})
  },
  createSuccessByDataAndMessage < T > (data : T, msg : string) : ServerResponse < T > {
    return new ServerResponse({success: true, data, msg})
  },
  createError() : ServerResponse < any > {
    return new ServerResponse({success: false});
  },
  createErrorByCode(err_code : number) : ServerResponse < any > {
    return new ServerResponse({success: false, err_code})
  },
  createErrorByMessage(err_msg : string) : ServerResponse < any > {
    return new ServerResponse({success: false, err_msg})
  },
  createErrorByCodeAndMessage(err_code : number, err_msg : string) : ServerResponse < any > {
    return new ServerResponse({success: false, err_code, err_msg})
  }
}