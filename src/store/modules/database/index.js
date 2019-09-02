import firebase from "firebase";

export default {
    namespaced: true,
    state: {
        nombre: "Carlo Gammarota",
        samples: [],
        filter: [],
        favoritos: []
    },
    getters: {
        getFilter(state){
            return state.filter
        },
        getNombre(state){
            return state.nombre
        },
        getAllSamples(state){
            return state.samples
        },
        getTags(state){
            let tags = state.samples.filter(tag => {
                if (tag.tag) {
                    return true
                }
            })
            return tags
        },
        getSamples(state){

                //VERIFICAR ESTO
                let newFilter = []
                    // console.log("defined")
                    for (let index = 0; index < state.samples.length; index++) {
                        for (let indexTo = 0; indexTo < state.filter.length; indexTo++) {
                            if (state.samples[index].tag == state.filter[indexTo]) {
                                newFilter.push(state.samples[index])
                            }
                        }
                    }
                    return newFilter
 

        }
    },
    mutations: {
        setSamples (state, data) {
            // state.samples.push(data)
            state.samples = data
            console.log("data", data)
        },
        setFilter(state, data){
            //chekear esto!!!!
            state.filter = data
            // state.filter.push(data)
            // state.filter.push(data)
        },

        //Getter de los tags individuales a seleccionar
        setFilterTag(state, data){
            //chekear esto!!!!
            
            state.filter.push(data)
            // state.filter = data
            // console.log("filterTag0", state.filter)
        }
    },
    actions: {
        getSamplesAction (context) {
            
            // var ref = firebase.database().ref("Musica");
            var ref = firebase.database().ref("Musica");
            // console.log("getSamplesAction", ref)
            ref.once("value").then(snapshot => {
              const peopleArray = Object.keys(snapshot.val()).map(
                i => snapshot.val()[i]
              );
            //   console.log("peopleArray", peopleArray);
            console.log("peopleArray", peopleArray)
                context.commit('setSamples', peopleArray)
            //   this.items = peopleArray;
            });
          }
    }
}
