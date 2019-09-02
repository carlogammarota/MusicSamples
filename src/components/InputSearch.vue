<template>
    <section class="column is-half is-offset-one-quarter">
        <b-field label="search by Tag">
            <!-- {{tags}} -->
            <b-taginput
                v-model="tags"
                ellipsis
                icon="label"
                placeholder="Add a tag">
            </b-taginput>
        </b-field>
        <p class="content"><b>Tags:</b> {{ tags }}</p>
        <!-- <p class="content"><b>Tags:</b> {{ tags }}</p> -->
    </section>
</template>

<script>
import store from "@/store/index";
import { mapState, mapGetters } from "vuex";
    export default {
        data() {
            return {
                tags: ["Kick", "Hihat", "Ride", "Snare", "Clap"]
            }
        },
        watch: {
            tags: function() {
                console.log("cambio Tags")
                this.$store.commit('database/setFilter', this.tags)
               
            }
        },
         computed: {
            ...mapGetters({getAllSamples: "database/getSamples", getFilter: "database/getFilter"})
        },
        mounted() {
            this.$store.commit('database/setFilter', this.tags)
        }
    }
</script>