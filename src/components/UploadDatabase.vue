<template>
  <div>
    <!-- <input type="file" @change="uploadFile($event)"> -->
    <br>
    {{CalcularPorcentajeDeCarga}}
    <br>
    <b-spinner v-if="spinner" label="Loading..."></b-spinner>

    <b-form-file
      placeholder="Choose a file..."
      drop-placeholder="Drop file here..."
      @change="uploadFile($event)"
      type="audio/mp3|wav|aiff"
    ></b-form-file>
  </div>
</template>
<script>
import firebase from "firebase";
//Componente que sube la imagen
export default {
  data() {
    return {
      progreso: 0,
      snapshot: {},
      spinner: false,
      NombreDelArchivo: "",
      Carpeta: "Musica",
      Archivo: "",
      UrlDownload: ""
    };
  },
  methods: {
    ReplaceWavMp3FlacAiff(archivo) {},
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
      this.NombreDelArchivo = event.target.files[0].name;
      this.Archivo = event.target.files[0];
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
            this.spinner = false;

            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              this.UrlDownload = downloadURL;
              this.EscribirDatos();
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
    }
  }
};
</script>

