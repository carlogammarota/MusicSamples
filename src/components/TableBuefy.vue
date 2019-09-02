<template>
    <div>
        {{getSamples}}

        

        <section class="hero is-warning">
          <div class="hero-body">
          
            <div class="container">
            
              <h1 class="title">
                Favorites 
              </h1>
              <h2 class="subtitle">
                download a zip with all your favorites
              </h2>
              <h4 v-for="song in checkedRows"> <i class="far fa-star"></i> <a :href="song.UrlDownload">    {{song.nombre}}</a> </h4>
            </div>
          </div>
          <!-- {{checkedRows.length}} -->
          <!-- <i class="fas fa-arrow-circle-down" style='font-size: 60px; padding: 0px 0px 40px 0px; max-width="140px"'></i><nuxt-link  style="margin: 10px;" class="button is-info">Descargar</nuxt-link> -->
          <i v-if="checkedRows.length >= 1" class="fas fa-arrow-circle-down" id="DownloadSection" @click="downloadZip()"></i>

        </section>

        {{checkedRows}}
        <section class="hero is-light">
          <div class="hero-body">
            <div class="container">
              <h3 class="title">
                List Samples
              </h3>
              <h2 class="subtitle">
                list of all samples
              </h2>
              
            </div>
          </div>
        </section>
        <tags></tags>
        <InputSearch></InputSearch>
        <b-table 
          :data="getSamples" 
          :columns="columns"
          :checked-rows.sync="checkedRows"
          :is-row-checkable="(row) => row.id !== 3"
          checkable
          :checkbox-position="checkboxPosition"
        > 
            <template slot-scope="props">

              <b-table-column field="nombre" label="Name" centered>
                {{props.row.nombre}}
              </b-table-column>

              <b-table-column field="folder" label="Folder" centered>
                <span class="tag is-dark">
                    {{props.row.tag}}
                </span>
              </b-table-column>

              <b-table-column field="play" label="Play" centered>
                <vue-plyr class="is-hidden-tablet">
                  <audio>
                    <source :src="props.row.UrlDownload" type="audio/mp3"/>
                  </audio>
                </vue-plyr> 

                <audioPlayer class="is-hidden-mobile"  :file="props.row.UrlDownload"></audioPlayer>
              </b-table-column>

              <b-table-column field="action" label="Action" centered>
                  <button style="margin: 10px;" class="button">Fav</button>
                  <button style="margin: 10px;" class="button">Start</button>
              </b-table-column>

            </template>
        </b-table>
        


        <!-- <section>
          <b-field grouped group-multiline>
              <button class="button field is-danger" @click="checkedRows = []"
                  :disabled="!checkedRows.length">
                  <b-icon icon="close"></b-icon>
                  <span>Clear checked</span>
              </button>
              <b-select v-model="checkboxPosition">
                  <option value="left">Checkbox at left</option>
                  <option value="right">Checkbox at right</option>
              </b-select>
          </b-field>

          <b-tabs>
              <b-tab-item label="Table">
                  <b-table
                      :data="data"
                      :columns="columns"
                      :checked-rows.sync="checkedRows"
                      :is-row-checkable="(row) => row.id !== 3"
                      checkable
                      :checkbox-position="checkboxPosition">

                      <template slot="bottom-left">
                          <b>Total checked</b>: {{ checkedRows.length }}
                      </template>
                  </b-table>
              </b-tab-item>

              <b-tab-item label="Checked rows">
                  <pre>{{ checkedRows }}</pre>
              </b-tab-item>
          </b-tabs>
      </section> -->




    </div>
</template>

<script>

import tags from "../components/Tags.vue";
import firebase from "firebase";
import { mapState, mapGetters, mapMutations } from "vuex";
import InputSearch from "../components/InputSearch.vue";
import store from "@/store/index";
import JSZip from 'jszip' 
import { saveAs } from 'file-saver';
import audioPlayer from "../components/Player.vue"
    export default {
      components: {
        InputSearch,
        tags,
        audioPlayer
      },
        data() {

            return {
                checkboxPosition: 'left',
                checkedRows: [],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    }
                ]
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
    downloadZip(){
      console.log("downloadZIP", this.checkedRows)

      // var new_zip = new JSZip();


      // for (let index = 0; index < this.checkedRows.length; index++) {
      //   // this.checkedRows[index];
      //   new_zip.file(this.checkedRows[index].nombre, this.checkedRows[index].UrlDownload);
      // }


      // new_zip.generateAsync({type:"blob"})
      // .then(function (blob) {
      //     saveAs(blob, "samples.zip");
      // });

      // console.log("zip", new_zip)


      var zip = new JSZip();
      var count = 0;
      var zipFilename = "zipFilename.zip";
      var urls = [
        'https://firebasestorage.googleapis.com/v0/b/samplesvuemusic.appspot.com/o/Musica%2FDose%20beats%20-%20La%20caldera.mp3?alt=media&token=bd8f0271-aa4d-4ee3-b749-ce7aaf3e33ea',
        // 'http://image-url-2',
        // 'http://image-url-3'
      ];

      urls.forEach(function(url){
        var filename = "filename";
        // loading a file and add it in a zip file
        JSZipUtils.getBinaryContent(url, function (err, data) {
          if(err) {
              throw err; // or handle the error
          }
          zip.file(filename, data, {binary:true});
          count++;
          if (count == urls.length) {
            var zipFile = zip.generateAsync({type: "blob"});
            saveAs(zipFile, zipFilename);

            // new_zip.generateAsync({type:"blob"})
            // .then(function (blob) {
            //     saveAs(blob, "samples.zip");
            // });

          }
        });
      });

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
    ...mapGetters({ getSamples: "database/getSamples"})
  }
}
</script>

<style>
#DownloadSection{
  font-size: 60px; padding: 0px 0px 40px 0px; max-width:"140px"; 
  cursor: pointer;
}
#DownloadSection:hover {
  font-size: 100px;
  padding: 40px 0px 40px 0px;
  
}
</style>