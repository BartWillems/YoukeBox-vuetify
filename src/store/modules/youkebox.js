import Vue from 'vue';
import * as types from '../mutation-types';

// initial state
const state = {
  // Predfined
  baseUrl: 'https://api.youkebox.be/api/v1',

  // Stuff
  rooms: null,
  playlist: null,
  music: null,
  query: null,
}

// mutations
const mutations = {
  [types.YUBO_SET_ROOMS](state, { rooms }) {
    state.rooms = rooms;
  },
  [types.YUBO_SET_PLAYLIST](state, { playlist }) {
    state.playlist = playlist;
  },
  [types.YUBO_SET_MUSIC](state, { music }) {
    state.music = music;
  },
  [types.YUBO_SET_QUERY](state, { query }) {
    state.query = query;
  },

}

// getters
const getters = {
  baseUrl: state => state.baseUrl,
  rooms: state => state.rooms,
  playlist: state => state.playlist,
  music: state => state.music,
  query: state => state.query,
}

// actions
const actions = {

  [types.YUBO_API_REQUEST](store, options = {}, ) {
    let url = `${store.getters.baseUrl}/${options.path}`
    let opts = {
      url: url,
      headers: {},
    }

    if (!options.method) {
      options.method = 'GET';
    }

    if (!options.path) {
      options.path = '/';
    }

    if (!options.params) {
      options.params = {}
    }

    // Merge in custom options
    for (let key in options) {
      opts[key] = options[key];
    }

    return new Promise((resolve, reject) => {
      Vue.http(opts).then((response) => {

        // Define a handler for paging
        function getNext(next) {
          return new Promise((resolve, reject) => {
            opts['url'] = next;

            Vue.http(opts).then(res => {
              res.body.results.forEach(el => results.push(el));

              if (res.body.next) {
                next = res.body.next;
                getNext(next).then(() => resolve());
              } else {
                resolve();
              }
            });
          });
        }

        // If the results are paginated; get all pages.
        let next = response.body.next;
        let results = response.data.results;

        if (next) {
          getNext(next).then(() => {
            response.data['results'] = results;
            resolve(response)
          });
        } else {
          resolve(response);
        }

      }, (response) => {
        console.log('RIP API Request');
        console.log(response);
      })
    });
  },

  [types.YUBO_RELOAD_ROOMS](store, options = {}) {
    options.path = '/rooms/';

    return new Promise((resolve, reject) => {
      store.dispatch(
        types.YUBO_API_REQUEST,
        options
      ).then((res) => {

        store.commit(types.YUBO_SET_ROOMS, {
          rooms: res.data
        });
        resolve(res);

      }, (res) => {
        reject(res);
      });
    });
  },


}

export default {
  state,
  getters,
  mutations,
  actions,
}