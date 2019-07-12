<template>
  <div>
    <p>This is at home!</p>
    <!-- <ListFirebaseStorage></ListFirebaseStorage> -->
    <!-- <ReadFilesDatabase></ReadFilesDatabase> -->
    <UploadDatabase></UploadDatabase>
    <tableFiles></tableFiles>
  </div>
</template>
<script>
import firebase from "firebase";
import ListFirebaseStorage from "../components/ListFirebaseStorage.vue";
import ReadFilesDatabase from "../components/ReadFilesDatabase.vue";
import UploadDatabase from "../components/UploadDatabase.vue";
import tableFiles from "../components/TableFiles.vue";
export default {
  name: "Home",
  components: {
    ListFirebaseStorage,
    ReadFilesDatabase,
    UploadDatabase,
    tableFiles
  },
  data() {
    return {
      photo: "",
      userId: "",
      name: "",
      email: "",
      user: {}
    };
  },
  methods: {
    boton() {
      alert("Boton Test");
    },
    getDownload() {}
  }
};
</script>

