<template>
  <div class="input">
    <InputIconLeft :icon="iconLeft"></InputIconLeft>
    <input
      class="input__field"
      :style="getPadding"
      type="text"
      :placeholder="placeholder"
      v-model="vModel"
      @input="handleInput"
    ></input>
    <InputIconRight :icon="iconRight"></InputIconRight>
  </div>
</template>

<script lang="ts" src="./component.ts"></script>
<style lang="scss" src="./component.scss"></style>
