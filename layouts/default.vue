<template>
  <div class="default">
    <Navbar></Navbar>
    <Nuxt></Nuxt>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import Navbar from "~/components/Navbar/component/component";

@Component({
  name: "Default",
  components: {
    Navbar,
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss" src="./default.scss"></style>
