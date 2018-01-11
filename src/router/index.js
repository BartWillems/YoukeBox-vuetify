import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import NowPlaying from '../components/NowPlaying'
import Rooms from '../components/Rooms'
import Playlist from '../components/Playlist'
import AddMusic from '../components/AddMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/playing',
      name: 'Now Playing',
      component: NowPlaying
    }, {
      path: '/rooms',
      name: 'Rooms',
      component: Rooms
    }, {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    }, {
      path: '/music/search',
      name: 'Add Music',
      component: AddMusic
    }
  ]
})
