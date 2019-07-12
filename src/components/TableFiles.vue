<template>
  <div>
    <br>
    <h5>Table Files</h5>
    <!-- items {{obj}} -->
    <!-- <ul v-for="ob in items">
      <li>{{ob.UrlDownload}}</li>
    </ul>-->
    <button @click="LeerDatos()">LeerDatos</button>
    <b-table striped hover :items="items">
      <template slot="UrlDownload" slot-scope="data">
        <audio controls>
          <source :src="data.item.UrlDownload">
        </audio>
      </template>
    </b-table>
    <br>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "tableFiles",
  data() {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        "index"
        // A column that needs custom formatting
      ],
      items: [
        // { nombre: this.nombre, carpeta: this.carpeta , linkDownload: this.linkDownload }
      ],
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
      var ref = firebase.database().ref("Musica");

      ref.once("value").then(snapshot => {
        const peopleArray = Object.keys(snapshot.val()).map(
          i => snapshot.val()[i]
        );
        console.log(peopleArray);
        this.items = peopleArray;
      });
    }
  }
};
</script>

