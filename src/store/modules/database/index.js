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

            // let filter = state.samples.filter(sample => {
            //     let asd = state.filter.filter(fil => {

            //         console.log("fil", fil)
            //         if(!fil){ return true }
            //         else {
            //             if (sample.tag == fil) {
            //                 console.log("filter", sample)
            //                 return true
            //             }
            //         }
            //     })
            // })
            // return filter

            // let filtrado = state.samples.filter(sam => {
            //     for (let index = 0; index < state.filter.length; index++) {
            //         if(state.filter[index].tag == sam.tag){
            //            return true 
            //         }
            //     }
            // })
            

            //Tiene que comparar los dos array y devolver 
            // console.log("State Samples", state.samples)
            // console.log("State Filter", state.filter)

            // let Filtradaso = state.samples.filter(item => {
            //         console.log("itemsinKey", item)
            //     for (var key in state.filter) {
            //         console.log("ITEM", item[key])
            //         // if (item[key].tag === undefined || item[key].tag != state.filter[key])
            //         if (item == state.filter[key])
            //         return true;
            //     }
            //     return false;
            // });

            // return Filtradaso


                //VERIFICAR ESTO
                let newFilter = []

                if (state.filter === undefined ) {
                    console.log("undefined", state.samples)
                    newFilter = state.samples

                } else {
                    console.log("defined")
                    for (let index = 0; index < state.samples.length; index++) {
                        for (let indexTo = 0; indexTo < state.filter.length; indexTo++) {
                            if (state.samples[index].tag == state.filter[indexTo]) {
                                newFilter.push(state.samples[index])
                            }
                        }
                    }
                    return newFilter
                }
                
                
                
            







            // let filter
            // for (let index = 0; index < state.filter.length; index++) {
            //     filter = state.samples.filter(sample => {
            //         if(state.filter[index] == ""){ return true }
            //         else {
            //             if (sample.tag == state.filter[index]) {
            //                 console.log("filter", sample)
            //                 return true
            //             }
            //         }
            //     })
            // }
            // return filter
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
            
            // state.filter.push(data)
            // state.filter = data
            console.log("filterTag0", state.filter)
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
