<template>
  <div>
    <NavBar></NavBar>
    <Header></Header>
    <UploadDatabase></UploadDatabase>
    
     
    <!-- <Search></Search> -->
    <!-- <ListFirebaseStorage></ListFirebaseStorage> -->
    <!-- <ReadFilesDatabase></ReadFilesDatabase> -->
    
    <!-- <tableFiles></tableFiles> -->
    
    <tableBuefy></tableBuefy>
   
  </div>
</template>
<script>
import firebase from "firebase";
import ListFirebaseStorage from "../components/ListFirebaseStorage.vue";
import ReadFilesDatabase from "../components/ReadFilesDatabase.vue";
import UploadDatabase from "../components/UploadDatabase.vue";
import tableFiles from "../components/TableFiles.vue";
import tableBuefy from "../components/TableBuefy.vue";


import NavBar from "../components/NavBar.vue";
import Header from "../components/Header.vue";
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
    tableBuefy,
    NavBar,
    Search,
    Header,
    
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

