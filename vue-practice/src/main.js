import components from '@/components/ui/index'
import { createApp } from 'vue'
import router from '@/router/router'
import App from './App.vue'

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
})

app
	.use(router)
	.mount('#app')
