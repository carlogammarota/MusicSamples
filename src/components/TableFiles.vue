<template>
  <div>
    <br>
    <h5>Table Files</h5>
    <!-- items {{obj}} -->
    <!-- <ul v-for="ob in items">
      <li>{{ob.UrlDownload}}</li>
    </ul>-->
    <!-- "getNombre:" {{getSamples}}
    {{getNombre}} -->
    <button @click="LeerDatos()">LeerDatos</button>
    <b-table striped hover :items="getSamples">
      <template slot="UrlDownload" slot-scope="data">
        <!-- <audio controls>
          <source :src="data.item.UrlDownload">  
        </audio> -->

        <!-- audio element -->
        <vue-plyr>
          <audio>
            <source :src="data.item.UrlDownload" type="audio/mp3"/>
          </audio>
        </vue-plyr>

        
      </template>
      <template slot="asd" slot-scope="data">
        <!-- <audio controls>
          <source :src="data.item.UrlDownload">  
        </audio> -->

        <!-- audio element -->
        <vue-plyr>
          <audio>
            <source :src="data.item.UrlDownload" type="audio/mp3"/>
          </audio>
        </vue-plyr>

        
      </template>
    </b-table>
    <br>
  </div>
</template>
<script>
import firebase from "firebase";
import { mapState, mapGetters } from "vuex";
import store from "@/store/index";
export default {
  name: "tableFiles",
  data() {
    return {
     
      obj: {},
      nombre: "",
      linkDownload: "",
      carpeta: ""
    };
  },
  firebase() {
    return {
      teamsRef: "Musica"
    };
  },
  watch: {
    teamsRef() {
      console.log("Change detected...");
    }
  },
  methods: {
    boton() {},
    // EscribirDatos() {
    //   var ref = firebase.database().ref("test2");
    //   ref
    //     .set({ nombre: "Carlo", age: 22 })
    //     .then(function() {
    //       return ref.once("value");
    //     })
    //     .then(snapshot => {

    //     });
    // },
    LeerDatos() {
      // var ref = firebase.database().ref("Musica");

      // ref.once("value").then(snapshot => {
      //   const peopleArray = Object.keys(snapshot.val()).map(
      //     i => snapshot.val()[i]
      //   );
      //   console.log(peopleArray);
      //   this.items = peopleArray;
      // });
    }
  },
  created () {
    // var ref = firebase.database().ref("Musica");
    // ref.on("child_added", function(snapshot, prevChildKey) {
    //   var newPost = snapshot.val();
    //   console.log("Author: " + newPost);
    // });
  },
  mounted(){
    // this.LeerDatos();
    // this.$store.
    // this.items.push({"asd":13})
    this.$store.dispatch('database/getSamplesAction')
    // this.$store.commit('database/getSamples')
  },
  computed: {
    ...mapGetters({getNombre: "database/getNombre", getSamples: "database/getSamples"})
  }
};
</script>

<style>
  .plyr--audio .plyr__controls{
    background-color: none !important
  }
</style>
