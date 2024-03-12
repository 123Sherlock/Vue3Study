import './assets/main.css'

// 这里导入的vue，来自于node_modules目录下的vue，已通过npm安装到本地
import { createApp } from 'vue'

// 导入Element-Plus，饿了么开发的基于Vue3的组件库
// 官网element-plus.org
// 用法：进入https://element-plus.org/zh-CN/component/overview.html
// 查看左侧栏，找到需要的组件，在中间找到需要的样例，再点击右下角的复制代码按钮，复制到项目中修改
// 需要调整组件属性时，从右边的CONTENTS里查找
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
// 这里把App.vue导入，使index.html中id为app的dev展示App.vue的内容
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
