<template>
  <div>
    <!-- <input type="file" @change="uploadFile($event)"> -->
    <!-- {{getSamples}} -->
    <br>
      {{CalcularPorcentajeDeCarga}}
    <br>
    <b-spinner v-if="spinner" label="Loading..."></b-spinner>

    <!-- <b-form-file
      placeholder="Choose a file..."
      drop-placeholder="Drop file here..."
      @change="uploadFile($event)"
      type="audio/mp3|wav|aiff"
    ></b-form-file> -->
      <section>
        <b-field>
            <b-upload v-model="dropFiles"
                type="audio/mp3|wav|aiff"
                multiple
                drag-drop>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </b-upload>
            
        </b-field>
        <!-- <b-field class="file">
            <b-upload v-model="dropFiles" >
                <a class="button is-primary">
                    <b-icon icon="upload"></b-icon>
                    <span>Click to upload</span>
                </a>
            </b-upload>
            <span class="file-name" v-if="file">
                {{ file.name }}
            </span>
        </b-field> -->
        <!-- <SelectTag></SelectTag> -->

      

        <div class="columns is-mobile">
          <div class="column is-half is-offset-one-quarter">
             <!-- <b-field label="Expanded"> -->
             <b-field label="Expanded">
                <b-select placeholder="Select Tag" required expanded v-model="selected">
                    <option v-for="samples in getSamples" >{{samples.carpeta}}</option>
                    <option value="silver">Silver</option>
                </b-select>
            </b-field>
          </div>
        </div>




        <b-button @click="uploadFile()">Upload</b-button>
<!-- 
        <div class="tags">
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
        </div> -->
    </section>
  </div>
</template>
<script>
import firebase from "firebase";
//Componente que sube la imagen
import { mapState, mapGetters, mapActions } from "vuex";
import store from "@/store/index";
import SelectTag from "./SelectTag";
export default {
  components: {
    SelectTag
  },
  data() {
    return {
      progreso: 0,
      snapshot: {},
      spinner: false,
      NombreDelArchivo: "",
      Carpeta: "Musica",
      Archivo: "",
      UrlDownload: "",
      dropFiles: [],
      isFullPage: true,
      selected: ""
    };
  },
  methods: {
    EscribirDatos() {
      // this.Carpeta = this.Carpeta + "/" + this.NombreDelArchivo;
      // console.log(this.Carpeta + "/" + this.NombreDelArchivo);
      var ref = firebase
        .database()
        .ref(this.Carpeta + "/" + this.NombreDelArchivo.replace(".", ""));
      ref
        .update({
          nombre: this.NombreDelArchivo,
          carpeta: this.Carpeta,
          UrlDownload: this.UrlDownload
        })
        .then(function() {
          return ref.once("value");
        })
        .then(snapshot => {
          // console.log(snapshot.val());
          // var data = snapshot.val();
          // data is { "name": "Ada", "age": 36 }
          // data.name === "Ada"
          // data.age === 36
        });
    },

    uploadFile(event) {


      console.log("selected", this.selected)
      // console.log("event", event[0])
      this.Carpeta = this.selected
      console.log("event", this.dropFiles[0])
      // this.NombreDelArchivo = event.target.files[0].name;
      this.NombreDelArchivo = this.dropFiles[0].name;
      this.Archivo = this.Carpeta
      var starsRef = firebase.storage().ref();
      var uploadTask = starsRef
        .child(this.Carpeta + "/" + this.NombreDelArchivo)
        .put(this.Archivo);

      this.spinner = true;

        uploadTask.on(
          "state_changed",
          snapshot => {
            console.log(this.spinner);
            let progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            this.snapshot = snapshot;
          },
          error => {
            console.log(error);
          },
          sus => {
            console.log("sussess", sus);
            this.dropFiles = []
            this.spinner = false;

            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.UrlDownload = downloadURL;
              this.EscribirDatos();
              // console.log("store dispatch")
              this.$store.dispatch('database/getSamplesAction')
              console.log("File available at", downloadURL);
              this.spinner = false;
            });
          }
        );
      
    }
  },
  computed: {
    CalcularPorcentajeDeCarga: function() {
      return (this.snapshot.bytesTransferred / this.snapshot.totalBytes) * 100;
    },
     ...mapGetters({getNombre: "database/getNombre", getSamples: "database/getSamples", getFavorites: "favorites/getFavorites"})
  }
};
</script>
