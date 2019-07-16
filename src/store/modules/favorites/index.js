import firebase from "firebase";

export default {
    namespaced: true,
    state: {
        favorites: []
    },
    getters: {
        getFavorites(state){
            // for (let index = 0; index < state.favorites.length; index++) {
            //     // state.favorites[index];
            //     console.log(state.favorites[index].Actions)
                
                
            // }
            // return state.favorites.splice(state.favorites.length, null);
            return state.favorites
        }
    },
    mutations: {
        addFavorites(state, data){
            // console.log("data", data)
            state.favorites.push(data)
        }
    },
    actions: {
        // getSamplesAction (context) {
        //     var ref = firebase.database().ref("Musica");
        //     ref.once("value").then(snapshot => {
        //       const peopleArray = Object.keys(snapshot.val()).map(
        //         i => snapshot.val()[i]
        //       );
        //     //   console.log("peopleArray", peopleArray);
        //         context.commit('setSamples', peopleArray)
        //     //   this.items = peopleArray;
        //     });
        //   }
    }
}
