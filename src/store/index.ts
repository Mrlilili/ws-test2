import type { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()

export const setupStore = (app: App): void => {
  app.use(store)
}
