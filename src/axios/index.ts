import { Axios } from "axios";
import { ErrorMessageMode } from "types/axios";
import VAxios from "./axios";
import { CreateAxiosOptions } from "./axiosTransform";

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  let options = {
    ...{
      baseURL: 'http://localhost:3001/',
      ignoreCancelToken: true,
      requestOptions: {
        withToken: true,
        joinTime: true,
        errorMessageMode:'none' as ErrorMessageMode,
        apiUrl:'ur'
      },
      errorMessageMode: 'message',
    },
    ...opt,
  };
  return new VAxios(options);
}

export default createAxios
