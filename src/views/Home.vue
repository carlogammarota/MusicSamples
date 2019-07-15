<template>
  <div>
    <NavBar></NavBar>
    <Search></Search>
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
import NavBar from "../components/NavBar.vue";
import Search from "../components/Search.vue";
import store from "@/store/index";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    ListFirebaseStorage,
    ReadFilesDatabase,
    UploadDatabase,
    tableFiles,
    NavBar,
    Search
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

