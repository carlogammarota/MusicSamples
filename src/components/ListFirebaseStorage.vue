<template>
  <div>
    <input type="file" @change="uploadFile($event)">
    <br>
    {{CalcularPorcentajeDeCarga}}
    <br>
    <b-spinner v-if="spinner" label="Loading..."></b-spinner>
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
      spinner: false
    };
  },
  methods: {
    uploadFile(event) {
      let Carpeta = "carpeta";
      let NombreDelArchivo = event.target.files[0].name;
      var Archivo = event.target.files[0];
      var starsRef = firebase.storage().ref();
      var uploadTask = starsRef
        .child(Carpeta + "/" + NombreDelArchivo)
        .put(Archivo);

      this.spinner = true;
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        snapshot => {
          console.log(this.spinner);
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          this.snapshot = snapshot;

          // console.log(snapshot.bytesTransferred);

          // console.log("Upload is " + progress + "% done");

          // switch (snapshot.state) {
          //   case firebase.storage.TaskState.PAUSED: // or 'paused'
          //     console.log('Upload is paused');
          //     break;
          //   case firebase.storage.TaskState.RUNNING: // or 'running'
          //     console.log('Upload is running');
          //     break;
          // }
        },
        error => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        sus => {
          console.log("sussess", sus);
          this.spinner = false;

          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
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

