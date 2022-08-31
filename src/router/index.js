import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView'
import ChatsView from '../views/ChatsView'
import FriendsView from '../views/FriendsVeiw'
import FavoritesVeiw from '../views/FavoritesVeiw'
import NotFound from '../views/NotFound'
import Login from '../views/Login'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/chats',
        name: 'ChatsView',
        component: ChatsView
    },
    {
        path: '/friends',
        name: 'FriendsView',
        component: FriendsView
    },
    {
        path: '/favorites',
        name: 'FavoritesVeiw',
        component: FavoritesVeiw
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
