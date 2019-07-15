<template>
    <div class="search">
             <!-- <b-breadcrumb :items="items"></b-breadcrumb> -->
        <b-container class="bv-example-row">
         <b-row class="text-center">
            <b-col>1 of 3</b-col>
            <b-col cols="8">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>   
            </b-col>
            <b-col>3 of 3</b-col>
        </b-row>
        </b-container>
    
    </div>
</template>
<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>
    .search input{
        width: 100%;
    }
</style>

