import axios, { AxiosRequestConfig, Method, AxiosInstance } from 'axios'
import router from '@/router'
import store from '@/store'
import { ElMessage, ElLoading } from 'element-plus'
// import { storage } from '../storage/storage'
import { CreateAxiosOptions } from './axiosTransform'
import { AxiosCanceler } from './axiosCancel'
import { isFunction } from '@/utils/is'

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
    return transform
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
  }
}
