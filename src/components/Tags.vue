<template>
    <section class="section">
    <!-- GETALLSAMPLES{{getAllSamples}} -->
        <span class="container is-widescreen" v-for="tag in getAllSamples" key="row">
            <span class="tags tag is-dark" @click="clickTag(tag.tag)"> {{tag.tag}} </span>
            <!-- {{getSamples}} -->
        </span>
        <!-- {{getTags}} -->
    </section>
</template>

<script>
// import firebase from "firebase";
//Componente que sube la imagen
import { mapState, mapGetters, mapActions } from "vuex";
// import store from "@/store/index";
export default {
  components: {
    // SelectTag
  },
  methods: {
      clickTag(event){
          console.log("event", event)
        //   this.$store.dispatch('database/getSamplesAction')
          this.$store.commit('database/setFilterTag', event)
          
      }
  },
  computed: {
     ...mapGetters({getAllSamples: "database/getAllSamples", getTags: "database/getTags"})
     
    // ...mapGetters({ getTags: "database/getTags"})
  },
//   mounted(){
//     this.$store.dispatch('database/getSamplesAction')
//   },
}
</script>

<style>
.tags {
    cursor: pointer;
    opacity: 0.6;
    margin: 2px;
}
.tags:hover {
    opacity: 1;
    margin: 7px;
}
</style>