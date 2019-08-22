<template>
  <div>
    <br>
    <!-- <button @click="test()">teassdasdasd</button> -->
    <div class="section" v-if="spinner">
      <h2>Uploading {{CalcularPorcentajeDeCarga}}</h2>
          <progress
          class="progress"
          :value="CalcularPorcentajeDeCarga"
          max="100"
          type="is-success"
        >25%</progress>  
    </div>
    <br>
    <b-spinner v-if="spinner" label="Loading..."></b-spinner>
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
        <div class="columns is-mobile">
          <div class="column is-half is-offset-one-quarter">
             <!-- <b-field label="Expanded"> -->
             <b-field label="Expanded">
                <b-select placeholder="Select Tag" required expanded v-model="selected">
                    <option value="Kick">Kick</option>
                    <option value="Hihat">Hi-Hat</option>
                    <option v-for="samples in getSamples">{{samples}}</option>
                    
                </b-select>
            </b-field>
          </div>
        </div>
        <b-button @click="uploadFile()">Upload</b-button>

    </section>
  </div>
</template>
<script>
import firebase from "firebase";
//Componente que sube la imagen
import { mapState, mapGetters, mapActions } from "vuex";
import store from "@/store/index";
export default {
  components: {
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
      selected: "",

      indeterminate: false,
      type: null,
      size: 'is-medium',
      showValue: true,
      format: 'raw',
      precision: 2,
      keepTrailingZeroes: false
    };
  },
  methods: {
    test(){
        // this.$buefy.notification.open('Something happened')
    },     
    EscribirDatos() {
     
      var ref = firebase
        .database()
        .ref(this.Carpeta + "/" + this.NombreDelArchivo.replace(".", ""));
      ref
        .update({
          nombre: this.NombreDelArchivo,
          carpeta: this.Carpeta,
          UrlDownload: this.UrlDownload,
          tag: this.selected
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
      this.NombreDelArchivo = this.dropFiles[0].name;

      console.log("selected", this.selected)

      // console.log("event", event[0])
      // this.Carpeta = this.selected
      console.log("event", this.dropFiles[0])
      // this.NombreDelArchivo = event.target.files[0].name;
      
      this.Archivo = this.dropFiles[0]
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

            this.$buefy.notification.open('Something happened')

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
