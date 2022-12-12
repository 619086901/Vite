import { createApp } from 'vue'
import App from './App.vue'

//antd组件
import { Button } from 'ant-design-vue'

//全局引入与按需比较，提示只是说vite不支持（按需引入还是成功的不然a-input会报错）
// import Antd from 'ant-design-vue'
//import 'ant-design-vue/dist/antd.less'

const app = createApp(App)

app.use(Button)

app.mount('#app')
