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
            
            // return state.samples
            let Array = []
            // Array.concat("test")
            console.log("array", Array.concat(state.samples))
            console.log("array sin concat", state.samples)
            Array.push({nombre: 420, carpeta: "Music", UrlDownload: "tres", Actions: ""})
            return Array.concat(state.samples)
            // return state.samples
            // return obligacionesFueraDeTermino.concat(arrayOrdenado)

            // {
                //       nombre: "this.NombreDelArchivo",
                //       carpeta: "this.Carpeta",
                //       UrlDownload: "this.UrlDownload"
                //     }
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
