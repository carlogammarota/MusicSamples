<template>
  <div>
    <br>
    <h5>Read Base de datos</h5>
    <button @click="EscribirDatos()">EscribirDatos</button>
    <button @click="LeerDatos()">LeerDatos</button>

    <br>
    <!-- {{DatosDeFirebase.age}} -->
    <!-- {{dataTable}} -->
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    boton() {},
    EscribirDatos() {
      var ref = firebase.database().ref("test2");
      ref
        .set({ nombre: "Carlo", age: 22 })
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
    LeerDatos() {
      var ref = firebase.database().ref("test2");

      ref.once("value").then(snapshot => {
        console.log(snapshot.val());
        //     var data = snapshot.val();
        //     // data is { "name": "Ada", "age": 36 }
        //     // data.name === "Ada"
        //     // data.age === 36
      });
    }
  }
  // firebase: function() {
  //   return {
  //     fbObj: firebase
  //       .database()
  //       .ref("test2")
  //       .ref.once("value")
  //       .then(snapshot => {
  //         return snapshot.val();
  //       })
  //   };
  // },
  // computed: {
  //   dataTable() {
  //     return this.fbObj;
  //   }
  // }
};
</script>

