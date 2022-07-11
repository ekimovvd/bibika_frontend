<template>
  <ul class="home-cards">
    <HomeCard v-for="CARD in CARDS" :key="CARD.id" :card="CARD"></HomeCard>
  </ul>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
