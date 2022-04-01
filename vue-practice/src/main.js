import components from '@/components/ui/index'
import directives from '@/directives/index'
import { createApp } from 'vue'
import router from '@/router/router'
import store from '@/store/store'
import App from './App.vue'

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
})

directives.forEach(directive => {
	app.directive(directive.name, directive)
})

app
	.use(router)
	.use(store)
	.mount('#app')
