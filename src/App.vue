<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
export default {
  name: "App",
  components: {
    ToolBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');
body {
  	margin: 0; line-height: normal;
}


</style>
