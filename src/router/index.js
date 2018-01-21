import Vue from 'vue'
import Router from 'vue-router'
import Rooms from '../components/Rooms'
import Playlist from '../components/Playlist'
import AddMusic from '../components/AddMusic'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'Rooms'
        }, {
            path: '/rooms',
            name: 'Rooms',
            component: Rooms
        }, {
            path: '/playlist',
            name: 'Playlist',
            component: Playlist
        }, {
            path: '/search',
            name: 'Add Music',
            component: AddMusic,
        }
    ]
})
