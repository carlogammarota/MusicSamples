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
     Favorites: {{getFavorites}}
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
      <template slot="Actions" slot-scope="data">
        <!-- <audio controls>
          <source :src="data.item.UrlDownload">  
        </audio> -->

        <!-- audio element -->
        <!-- <vue-plyr>
          <audio>
            <source :src="data.item.UrlDownload" type="audio/mp3"/>
          </audio>
        </vue-plyr> -->
        <b-btn @click="addFavorites(data.item)" download class="actions" variant="primary" >
          <star-circle></star-circle>
        </b-btn> -
        <b-btn @click="data.item.UrlDownload" download variant="success" class="actions">
          <downloadIcon />
        </b-btn>
        <!-- <i class="fas fa-arrow-circle-down"></i> -->
        
      </template>
    </b-table>
    <br>
  </div>
</template>
<script>
import firebase from "firebase";
import { mapState, mapGetters, mapMutations } from "vuex";
import store from "@/store/index";
import JSZip from 'jszip' 
import { saveAs } from 'file-saver';
export default {
  name: "tableFiles",
  components:{
  },
  data() {
    return {
      obj: {},
      nombre: "",
      linkDownload: "",
      carpeta: "",
      toastCount: 0
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
    makeToast(message, obj ,append = false) {
        this.toastCount++
        this.$bvToast.toast(`Sample ${obj.nombre} agregado a Favoritos correctamente`, {
          title: 'Add to Favorites',
          autoHideDelay: 2000,
          appendToast: append
        })
    },
    addFavorites(obj){
      
      // var zip = new JSZip();
      // zip.file(obj.nombre, obj.UrlDownload);
      // var file = new File(obj.nombre, {type: "audio/mp3"});
      // zip.file("Hello.txt", "Hello World\n");
      // // var img = zip.folder("images");
      // // img.file("smile.gif", {base64: true});

      // saveAs(obj.UrlDownload, obj.nombre);

      // zip.generateAsync({type:"blob"})
      // .then(function (blob) {
      //     saveAs(obj.nombre, obj.UrlDownload, "hello.zip");
      // });
      // zip.generateAsync({type:"blob"})
      // .then(function(content) {
      //     // see FileSaver.js
      //     saveAs(content, "example.zip");
      //     zip.file("audio.mp3", {binary:true});
      // });

      // zip.getBinaryContent(obj.UrlDownload, function (err, data) {
      //     if(err) {
      //     throw err; // or handle the error
      //     }
      //     var zip = new JSZip();
          
      //     zip.file("audio.mp3", data, {binary:true});

      // });


      this.makeToast("message", obj)
      console.log("obj", obj)
      this.$store.commit("favorites/addFavorites", obj)

    },
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
    // this.getSamples.update({
    //       nombre: "this.NombreDelArchivo",
    //       carpeta: "this.Carpeta",
    //       UrlDownload: "this.UrlDownload"
    //     })
        
  },
  computed: {
    ...mapGetters({getNombre: "database/getNombre", getSamples: "database/getSamples", getFavorites: "favorites/getFavorites"})
  }
};
</script>

<style>
  .plyr--audio .plyr__controls{
    background-color: none !important
  }
  .actions{
    font-size: 5px;
  }

  star-circle downloadIcon {
    font-size: 10px;
  }
</style>
