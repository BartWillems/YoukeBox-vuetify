<template>
    <v-container fluid grid-list-lg>
        <h3>Rooms</h3>
    </v-container>
</template>

<script>
export default {
    name: 'Rooms',
    data () {
        this.$http.get('rooms')
        .then(response => {
            console.log(response);
            return response.body;
        }, response => {
            console.log(response);
        });
        return {}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
