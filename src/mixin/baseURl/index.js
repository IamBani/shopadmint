
import baseURL from '@/api/baseURL'

export default {
  data () {
    return {
      baseURL: null
    }
  },
  created () {
    this.setUrl()
  },
  methods: {
    setUrl () {
      const leng = baseURL[baseURL.length - 1]
      if (leng === '/') {
        this.baseURL = baseURL.slice(0, -1)
      } else {
        this.baseURL = baseURL
      }
    }
  }
}
