<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <div>
                <!-- MODAL START -->

                <b-modal id="modal-1" title="Favorites">
                    <p class="my-4">Hello from modall!</p>
                    {{getFavorites.nombre}}
                    <b-table striped hover :items="getFavorites">
                            <template slot="UrlDownload" slot-scope="data">
                                <audio controls>
                                    <source :src="data.item.UrlDownload">  
                                </audio>

                                <!-- audio element -->
                                <!-- <vue-plyr>
                                <audio>
                                    <source :src="data.item.UrlDownload" type="audio/mp3"/>
                                </audio>
                                </vue-plyr> -->
                            </template>
                    </b-table>
                    
                    <b-button variant="info">Download</b-button>
                </b-modal>
                <!-- Modal Finish -->
            </div>
            <b-navbar-brand href="#">samplesDownload</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                
                <b-button v-b-modal.modal-1 variant="warning">FAVORITES</b-button>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>User</em></template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        
    </div>
</template>
<script>

import { mapState, mapGetters, mapMutations } from "vuex";
export default {
     data() {
        return {

        }
    },
    computed:{
        ...mapGetters({getFavorites: "favorites/getFavorites"})
    }
}
</script>
<style>
.modal-dialog modal-md{
    max-width: 100%;
}
</style>

