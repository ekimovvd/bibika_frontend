<template>
  <button class="button" :class="getButtonClass">
    <p class="button__placeholder">
      {{ placeholder }}
    </p>
  </button>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
