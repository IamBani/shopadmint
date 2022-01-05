import { AppRouteRecordRaw } from '@/router/types'
import { computed, defineComponent, PropType, toRefs, resolveComponent, h } from 'vue'
import './css.scss'
const subMenu = defineComponent({
  name: 'subMenu',
  props: {
    item: {
      type: Object as PropType<AppRouteRecordRaw>,
      default: () => ({}),
      required: true
    },
    path: {
      type: String,
      default: '',
      required: true
    }
  },
  setup (props) {
    const { item, path } = toRefs(props)
    const svg = 'svg-icon'
    const t = computed(() => {
      return item.value?.meta?.title
    })
    function isIcon () {
      return item.value?.meta?.svg ? h(resolveComponent(svg), { iconName: item.value?.meta?.svg })
        : (
          <el-icon>
            {h(resolveComponent(item.value?.meta?.icon || ''))}
          </el-icon>
        )
    }
    function isSingle () {
      const { ele, rootpath } = recursion(item.value, item.value?.path)
      return (
        <>
          <sub-menu item={ele} path={rootpath}></sub-menu>
        </>
      )
    }
    function recursion (item, path) {
      if (item?.children?.length === 1) {
        path = path + '/' + item?.children[0].path
        return recursion(item?.children[0], path)
      } else {
        return { ele: item, rootpath: path }
      }
    }

    return () => {
      if (item.value?.children?.length === 1 && item.value?.meta?.single) {
        return isSingle()
      }
      if (item.value.children && item.value.children.length > 0) {
        return (
          <>
            <el-sub-menu index={path.value} class="sub-menu"
              v-slots={{
                title: () => (
                  <>
                    {isIcon()}
                    <span>{t.value}</span>
                  </>
                )
              }}
            >
              {item.value.children.map((i) => {
                return (
                  <div>
                    <sub-menu key={i.path} item={i} path={path.value + '/' + i.path}></sub-menu>
                  </div>)
              })}
            </el-sub-menu>
          </>
        )
      } else {
        return (
          <>
            <el-menu-item index={path.value} class="sub-menu-item"
              v-slots={{
                title: () => (
                  <>
                    {isIcon()}
                    <span>{t.value}</span>
                  </>
                )
              }}>
            </el-menu-item>
          </>
        )
      }
    }
  }
})
export default subMenu
