import firebase from "firebase";

export default {
    namespaced: true,
    state: {
        nombre: "Carlo Gammarota",
        samples: {}
    },
    getters: {
        getNombre(state){
            return state.nombre
        },
        getSamples(state){
            return state.samples
        }
    },
    mutations: {
        setSamples (state, data) {
            state.samples = data
          }
    },
    actions: {
        getSamplesAction (context) {
            var ref = firebase.database().ref("Musica");
            ref.once("value").then(snapshot => {
              const peopleArray = Object.keys(snapshot.val()).map(
                i => snapshot.val()[i]
              );
            //   console.log("peopleArray", peopleArray);
                context.commit('setSamples', peopleArray)
            //   this.items = peopleArray;
            });
          }
    }
}
