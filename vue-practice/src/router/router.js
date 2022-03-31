import Main from '@/pages/Main.vue'
import Posts from '@/pages/Posts.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{path: '/', component: Main},
	{path: '/posts', component: Posts}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router