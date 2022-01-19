<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style>
.dropdown-option.is-disabled {
  /* color: #979fa7; */
  pointer-events: none;
  background-color: transparent;
}
.dropdown-option.is-disabled .dropdown-item{
  color: #979fa7 !important;
}
</style>
