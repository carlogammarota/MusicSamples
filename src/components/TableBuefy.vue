<template>
    <div>
        <!-- {{getSamples}} -->
          <section class="hero">
            <div class="hero-body">
                <div class="container">
                <h3 class="title">
                    List Samples
                </h3>
                </div>
            </div>
        </section>
        <b-table :data="getSamples" >
            <template slot-scope="props">
                
                
            <!-- <b-table-column label="Nombre" centered>
                <span class="tag is-success">
                    {{props}}
                </span>
            </b-table-column> -->

            <b-table-column field="nombre" label="Name" centered>
                {{props.row.nombre}}
            </b-table-column>
            <b-table-column field="folder" label="Folder" centered>
                <span class="tag is-dark">
                    {{props.row.carpeta}}
                </span>
            </b-table-column>
            <b-table-column field="play" label="Play" centered>
                <!-- {{props.row.UrlDownload}} -->
                 <vue-plyr>
                    <audio>
                        <source :src="props.row.UrlDownload" type="audio/mp3"/>
                    </audio>
                </vue-plyr>
            </b-table-column>

            </template>
        </b-table>
    </div>
</template>

<script>
import firebase from "firebase";
import { mapState, mapGetters, mapMutations } from "vuex";
import store from "@/store/index";
import JSZip from 'jszip' 
import { saveAs } from 'file-saver';
    export default {
        data() {
            return {
                
            }
        },
    firebase() {
        return {
            teamsRef: "Musica",
            obj: {},
            nombre: "",
            linkDownload: "",
            carpeta: "",
            toastCount: 0
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
}
</script>