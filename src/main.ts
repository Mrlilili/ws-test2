// 引入windi css
import '@/plugins/windi.css'

// 引入状态管理
import { setupStore } from '@/store'

// 引入全局样式
import '@/styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import 'ress'
import { setupRouter } from '@/router'

const app = createApp(App)

setupStore(app)
setupRouter(app)
app.mount('#app')
