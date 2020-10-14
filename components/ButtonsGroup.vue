<template>
  <div class="divButtons">
    <v-btn depressed large color="primary" @click="onAccept()">Accept</v-btn>
    <v-btn depressed large color="error" :style="style" @mouseover="onHover()">Reject</v-btn>
      <v-snackbar
        v-model="snackbar"
      >
      Resignation accepted, beep boop beep boop

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      style: {},
      snackbar: false,
    }
  },
  methods: {
    onHover: function() {
      const clientX = Math.random() * (window.innerWidth) / window.innerWidth * 100;
      const clientY = Math.random() * (window.innerHeight) / window.innerHeight * 100;
      this.style = {
        position: "fixed",
        left: `${clientX}%`,
        top: `${clientY}%`
      }
    },
    onAccept: async function() {
      this.snackbar = true
      // await this.$fireAnalytics.logEvent('button_clicked', {
      //   items: [{ name: "accept_button" }]
      // });
    }
  }
})
</script>

<style lang="scss">
.divButtons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10vh;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
}
.primary {
  background: #2196F3 !important;
}
.error {
  background: #F44336 !important;
}
</style>