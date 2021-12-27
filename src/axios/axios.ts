import axios, { AxiosRequestConfig, Method, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import router from '@/router'
import store from '@/store'
import { ElMessage, ElLoading } from 'element-plus'
import { CreateAxiosOptions } from './axiosTransform'
import { AxiosCanceler } from './axiosCancel'
import { isFunction } from '@/utils/is'
import { RequestOptions, Result } from 'types/axios'
import qs from "qs"
import { ContentTypeEnum, RequestEnum } from '@/enums/httpEnum'
class VAxios {
  axiosInstance: AxiosInstance;
  readonly options:CreateAxiosOptions
  constructor (options:CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  getTransform () {
    const { transform } = this.options
    return transform || {}
  }
   // support form-data
   supportFormData(config: AxiosRequestConfig) {
    const headers = config.headers || this.options.headers;
     const contentType = headers?.['Content-Type'] || headers?.['content-type'];
     console.log(contentType)
    debugger
    if (
      config.method?.toUpperCase() === RequestEnum.GET
    ) {
      return config;
    } else if( config.method?.toUpperCase() === RequestEnum.POST) {
      return {
        ...config,
        data: qs.stringify(config.data, { arrayFormat: 'brackets' }),
      };
     }
     return config
  }
  setupInterceptors () {
    const transform = this.getTransform()
    if (!transform) {
      return
    }
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform

    const axiosCanceler = new AxiosCanceler()
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      console.log(config)
      const {
        // @ts-ignore
        headers: { ignoreCancelToken }
      } = config
     
      const ignoreCancel =
        ignoreCancelToken !== undefined
          ? ignoreCancelToken
          : this.options.requestOptions?.ignoreCancelToken
      !ignoreCancel && axiosCanceler.addPending(config)
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options)
      }
      return config
    })
    requestInterceptorsCatch &&
    isFunction(requestInterceptorsCatch) &&
    this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch);
    
    this.axiosInstance.interceptors.response.use((res:AxiosResponse) => {
      res && axiosCanceler.removePending(res.config);
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res)
      }
      return res;
    })
    responseInterceptorsCatch && isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined,responseInterceptorsCatch)
  }
  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options);
  }

  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'POST' }, options);
  }

  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'PUT' }, options);
  }

  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'DELETE' }, options);
  }
  request<T = any>(config:AxiosRequestConfig,options?:RequestOptions):Promise<T> {
    let conf: CreateAxiosOptions = { ...config };
    const transform = this.getTransform();

    const { requestOptions } = this.options;

    const opt: RequestOptions = Object.assign({}, requestOptions, options);
    const { beforeRequestHook, requestCatchHook, transformRequestHook } = transform || {};
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt);
    }
    conf.requestOptions = opt;

    conf = this.supportFormData(conf);
    return new Promise((resolve, reject) => {
      console.log(conf)
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformRequestHook && isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt);
              resolve(ret);
            } catch (err) {
              reject(err || new Error('request error!'));
            }
            return;
          }
          console.log(res)
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, opt));
            return;
          }
          if (axios.isAxiosError(e)) {
            // rewrite error message from axios in here
          }
          reject(e);
        });
    })
  }
}

export default VAxios
