<template>
  <div class="home-search">
    <Input
      :placeholder="INPUT_PLACEHOLDER"
      :iconLeft="INPUT_ICON_LEFT"
      :value="searchValue"
      @handleInput="handleSearch"
    ></Input>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
