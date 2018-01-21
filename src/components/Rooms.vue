<template>
    <v-container fluid grid-list-lg>
        <h3>Rooms</h3>
        <v-text-field
            solo
            v-model="query"
            prepend-icon="search"
            placeholder="Search for your favorite rooms"
            light
            @keyup.enter="search"
            loading="red"
            :disabled="loading"
        >
        </v-text-field>

        <br>

        <v-list two-line>
            <div v-for="room in rooms" :key="room.id">
                <v-list-tile v-bind:key="room.name" @click="subscribe(room.name)">
                    <v-list-tile-content transition="slide-x-transition">
                        <v-list-tile-title v-html="room.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="room.description"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </div>
        </v-list>

        <v-snackbar
            :timeout="timeout"
            bottom
            v-model="snackbar"
        >
            Subscribed to: {{ roomName }}
            <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-container>


</template>

<script>
export default {
    name: 'Rooms',
    data () {
        this.$http.get('rooms')
        .then(response => {
            this.rooms = response.body;
        }, response => {
            console.log(response);
        });

        return {
            rooms: this.$store.state.rooms,
            query: '',
            loading: false,
            roomName: '',
            snackbar: false,
            timeout: 3000
        }
    },
    methods: {
        search (query) {
            this.loading= true;
            this.$http.get('rooms?name=' + this.query)
            .then(response => {
                this.rooms = response.body;
            }, response => {
                console.log(response);
            }).finally(response => {
                this.loading= false;
            });
        },
        subscribe (roomId) {
            this.roomName = roomId;
            this.snackbar = true;
        }
    }
}
</script>

<style scoped>
.theme--dark, .list {
    background: inherit !important;
}
</style>
