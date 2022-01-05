import { defineComponent, unref } from 'vue'

const abc = defineComponent({
  props: {
    i: {
      type: Array
    }
  },
  setup (props) {
    const i = unref(props.i)
    console.log(i)
    return () => (
      <>
        <el-button type="success">Success</el-button>
        <div>899</div>
      </>
    )
  }
})
export default abc
