<template>
    <div>
        <v-container fluid grid-list-lg>
        
            <h3>Add Music</h3>
            <v-text-field
                solo
                prepend-icon="search"
                placeholder="Search for great music like Death and Mayhem"
                :light="true"
            ></v-text-field>
            <v-layout style="margin-top: 15px;" wrap>
                <v-flex xs12 sm9 md6 lg3 xl3
                    v-for="song in songs"
                    :key="song.id"
                    style="margin-bottom: 10px;"
                >
                    <v-card
                        :light="false"
                        :hover="true" 
                    >
                        <v-card-media :src="song.image" height="200px"></v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ song.title }}</h3>
                                <span class="grey--text">
                                    <v-icon>access_time</v-icon> {{ song.duration }}
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
        return {
            songs: [
                    {
                        id: '1',
                        title: 'Kangaroo dink',
                        duration: '4 minutes 3 seconds',
                        image: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg'
                    }, {
                        id: '2',
                        title: 'Kangaroo dink',
                        duration: '4 minutes 3 seconds',
                        image: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg'
                    }, {
                        id: '3',
                        title: 'Kangaroo dink',
                        duration: '4 minutes 3 seconds',
                        image: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg'
                    }, {
                        id: '4',
                        title: 'Kangaroo dink',
                        duration: '4 minutes 3 seconds',
                        image: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg'
                    }, {
                        id: '5',
                        title: 'Kangaroo dink',
                        duration: '4 minutes 3 seconds',
                        image: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg'
                    }, {
                        id: '6',
                        title: 'Kangaroo dink',
                        duration: '4 minutes 3 seconds',
                        image: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg'
                    }, {
                        id: '7',
                        title: 'Kangaroo dink',
                        duration: '4 minutes 3 seconds',
                        image: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg'
                    }
            ]
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
