<template>
  <div class="default">
    <Nuxt></Nuxt>
    <Toolbar></Toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import Toolbar from "~/components/Toolbar/component/component.vue";

@Component({
  name: "Default",
  components: {
    Toolbar,
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss" src="./default.scss"></style>
