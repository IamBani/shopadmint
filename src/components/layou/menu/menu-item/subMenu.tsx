import { AppRouteRecordRaw } from '@/router/types'
import { useStore } from '@/store'
import { computed, defineComponent, PropType, toRefs, resolveComponent, h, watch, unref } from 'vue'
import { useI18n } from 'vue-i18n'
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
    },
    pathname: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const { t } = useI18n()
    const store = useStore()
    const locale = store.getters['language/getlange']
    const { item, path } = toRefs(props)
    const svg = 'svg-icon'
    console.log(item)
    console.log(t('message.zh-CN.common.back'))
    const title = computed(() => {
      return item.value?.meta?.title
    })
    function isIcon () {
      return item.value?.meta?.svg ? (
        <i class="el-icon">
          {h(resolveComponent(svg), { iconName: item.value?.meta?.svg, class: 'svg-icon action' })}
        </i>
      )
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
                    <span>{ title.value}</span>
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
        // console.log(path.value)
        return (
          <>
            <el-menu-item index={path.value} class="sub-menu-item"
              v-slots={{
                title: () => (
                  <>
                    <span>{title.value}</span>
                  </>
                )
              }}>
              {isIcon()}
            </el-menu-item>
          </>
        )
      }
    }
  }
})
export default subMenu
