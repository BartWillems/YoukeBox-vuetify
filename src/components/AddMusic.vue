<template>
    <div>
        <v-container fluid grid-list-lg>

            <h3>Add Music</h3>
            <v-text-field
                solo
                v-model="query"
                prepend-icon="search"
                placeholder="Search for great music like Death and Mayhem"
                :light="true"
                @keyup.enter="search"
            ></v-text-field>


            <v-layout style="margin-top: 15px;" wrap justify-center align-center>

                <!-- Progress -->
                <v-progress-circular
                    indeterminate
                    v-bind:width="3"
                    v-bind:size="70"
                    color="red"
                    v-if="loading === true"
                    justify-center align-center
                ></v-progress-circular>

                <!-- Actual Videos -->
                <v-flex xs12 sm9 md6 lg3 xl3
                    v-for="song in songs"
                    :key="song.id"
                    style="margin-bottom: 10px;"
                    v-if="loading === false"
                >
                    <v-card
                        :light="false"
                        :hover="true"
                    >
                        <v-card-media :src="song.snippet.thumbnails.high.url" height="200px"></v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ song.snippet.title }}</h3>
                                <span class="grey--text">
                                    <v-icon>access_time</v-icon> {{ song.contentDetails.duration }}
                                </span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn color="primary">Add Song</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>
    </div>
</template>

<script>
export default {
    name: 'AddMusic',
    data () {
        let _query = this.$route.query.query ? this.$route.query.query : this.$store.state.addMusic.query;
        return {
            loading: false,
            songs: this.$store.state.addMusic.videos,
            query: _query
        }
    },
    created() {
        this.search()
    },
    methods: {
        search () {
            if ( ! this.$route.query.query && this.query.length > 0 ) {
                this.$router.push({query: {query: this.query}});
            }
            // Don't search again when it doesn't need to
            if (this.query === '' || this.query === this.$store.state.addMusic.query) return;

            this.loading = true;
            this.$store.state.addMusic.query = this.query;

            this.$http.get('youtube/' + this.query)
            .then(response => {
                this.songs = response.body.items;
                this.$store.state.addMusic.videos = this.songs;
            }, response => {
                console.log(response);
            }).finally(response => {
                this.loading = false;
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
    color: black;
}

.input-group__input > i {
    color: black;
}
</style>
