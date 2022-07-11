<template>
  <ul class="home-tabs">
    <HomeTab
      class="home-tabs__tab"
      v-for="TAB in TABS"
      :key="TAB.id"
      :tab="TAB"
    ></HomeTab>
  </ul>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
