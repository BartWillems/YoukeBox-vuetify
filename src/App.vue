<template>
    <v-app
        dark
        id="inspire"
    >
        <v-navigation-drawer
            fixed
            enable-resize-watcher
            :clipped="$vuetify.breakpoint.width > 600"
            v-model="drawer"
            app
        >
            <v-list dense>
                <router-link v-for="item in items" :key="item.text" v-bind:to="item.url">
                    <v-list-tile >
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                </v-list-tile>
                </router-link>
            </v-list>
        </v-navigation-drawer>
        <!-- TODO: This toolbar should be red when the dark theme is enabled-->
        <v-toolbar color="red" dense fixed clipped-left app>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                YoukeBox
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <router-view>
                <v-container fluid fill-height></v-container>
            </router-view>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            dark: true,
            drawer: (this.$vuetify.breakpoint.width < 600) ? false : true,
            items: [
                { icon: "store", text: "Music Rooms", url: "/rooms" },
                { icon: "play_circle_outline", text: "Playlist", url: "/playlist" },
                { icon: "search", text: "Add Music", url: "/search" }
            ]
        };
    },
    props: {
        source: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul a {
  text-decoration: none;
}

.router-link-exact-active > li {
  background-color: rgba(255, 255, 255, 0.1);
}

/* .content {
    margin: 15px 15px 0 15px;
} */
</style>
