import { App } from 'vue'
import {
  ElButton, ElSwitch, ElForm, ElFormItem, ElInput, ElIcon, ElCard, ElCheckbox,
  ElContainer, ElAside, ElHeader, ElMain, ElMenu, ElResult,
  ElBreadcrumb, ElRow, ElCol, ElPopover,
  ElInputNumber, ElDropdown, ElDropdownItem, ElTooltip,
  ElAvatar, ElTag, ElTabs, ElSpace, ElDialog, ElRadio, ElDatePicker, ElSelect, ElOption, ElUpload, ElTimePicker, ElTable, ElMessage,
  ElConfigProvider, ElDescriptions, ElDescriptionsItem, ElEmpty, ElSubMenu, ElMenuItem
} from 'element-plus'
import * as ElIconModules from '@element-plus/icons'
import 'element-plus/dist/index.css'

import SvgIcon from '@/components/Svg/Svg.vue'

function registeredSvgIcon (app: App): void {
  for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
      const item = ElIconModules[iconName]
      app.component(iconName, item)
    }
  }
}
export default {
  install (Vue:App):void {
    Vue.component(ElButton.name, ElButton)
    Vue.component(ElSwitch.name, ElSwitch)
    Vue.component(ElForm.name, ElForm)
    Vue.component(ElFormItem.name, ElFormItem)
    Vue.component(ElCard.name, ElCard)
    Vue.component(ElInput.name, ElInput)
    Vue.component(ElInputNumber.name, ElInputNumber)
    Vue.component(ElIcon.name, ElIcon)
    Vue.component(ElCheckbox.name, ElCheckbox)
    Vue.component(ElContainer.name, ElContainer)
    Vue.component(ElHeader.name, ElHeader)
    Vue.component(ElAside.name, ElAside)
    Vue.component(ElMain.name, ElMain)
    Vue.component(ElMenu.name, ElMenu)
    Vue.component(ElSubMenu.name, ElSubMenu)
    Vue.component(ElMenuItem.name, ElMenuItem)
    Vue.component(ElBreadcrumb.name, ElBreadcrumb)
    Vue.component(ElResult.name, ElResult)
    Vue.component(ElRow.name, ElRow)
    Vue.component(ElCol.name, ElCol)
    Vue.component(ElAvatar.name, ElAvatar)
    Vue.component(ElTabs.name, ElTabs)
    Vue.component(ElSpace.name, ElSpace)
    Vue.component(ElDialog.name, ElDialog)
    Vue.component(ElRadio.name, ElRadio)
    Vue.component(ElDatePicker.name, ElDatePicker)
    Vue.component(ElSelect.name, ElSelect)
    Vue.component(ElOption.name, ElOption)
    Vue.component(ElUpload.name, ElUpload)
    Vue.component(ElTimePicker.name, ElTimePicker)
    Vue.component(ElTable.name, ElTable)
    Vue.component(ElTag.name, ElTag)
    Vue.component(ElPopover.name, ElPopover)
    Vue.component(ElConfigProvider.name, ElConfigProvider)
    Vue.component(ElDescriptions.name, ElDescriptions)
    Vue.component(ElDescriptionsItem.name, ElDescriptionsItem)
    Vue.component(ElEmpty.name, ElEmpty)
    Vue.component(ElDropdown.name, ElDropdown)
    Vue.component(ElDropdownItem.name, ElDropdownItem)
    Vue.component(ElTooltip.name, ElTooltip)
    Vue.config.globalProperties.$message = ElMessage
    registeredSvgIcon(Vue)

    Vue.component('svg-icon', SvgIcon)
  }
}
