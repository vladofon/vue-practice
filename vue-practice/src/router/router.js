import Main from '@/pages/Main.vue'
import Posts from '@/pages/Posts.vue'
import About from '@/pages/About.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{path: '/', component: Main},
	{path: '/posts', component: Posts},
	{path: '/about', component: About}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router