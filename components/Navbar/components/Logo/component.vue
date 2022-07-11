<template>
  <div class="navbar-logo">
    <button class="navbar-logo__button" @click="handleAvatar">
      <i class="navbar-logo__avatar" :class="AVATAR"></i>
      <h4 class="navbar-logo__title">{{ TITLE }}</h4>
    </button>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
