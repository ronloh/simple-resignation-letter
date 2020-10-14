<template>
  <div class="site-container">
    <h1>Resignation Letter</h1>
    <ImageCombo />
    <ButtonsGroup />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.site-container {
  h1 {
    margin-top: 10vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: Roboto, sans-serif;
}

@media screen and (max-width: 765px){
  .site-container{
    h1 {
      margin-top: 5vh;
    }
  }
}
</style>
