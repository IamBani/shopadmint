/**
 * 
 * @param key 获取缓存的key
 */
export function getItem(key:string):string | null {
 let data = window.localStorage.getItem(key)  
  try {
    return JSON.parse(data as string)
  } catch (error) {
    return data
  }
}

/**
 * 
 * @param key 缓存的key
 * @param value 缓存的value
 */
export function setItem(key: string, value:string) {
  window.localStorage.setItem(key,value)
}


/**
 * 
 * @param key 删除的key
 */

export function removeItem(key:string) {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有缓存
 */
export function removeAllItem() {
  window.localStorage.clear()
}
