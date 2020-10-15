<template>
  <div class="divButtons">
    <v-btn depressed large color="primary" @click="onAccept()">Accept</v-btn>
    <v-btn depressed large color="error" :style="style" @mouseover="onHover()" @click="onReject()">Reject</v-btn>
      <v-snackbar
        v-model="snackbar"
      >
      {{ message }}

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

<script>
export default {
  data() {
    return {
      style: {},
      snackbar: false,
      message: "",
    }
  },
  methods: {
    onHover: async function() {
      const clientX = Math.random() * (window.innerWidth) / window.innerWidth * 100;
      const clientY = Math.random() * (window.innerHeight) / window.innerHeight * 100;
      await this.$fireAnalytics.logEvent('button_hover');
      this.style = {
        position: "fixed",
        left: `${clientX}%`,
        top: `${clientY}%`
      }
    },
    onAccept: async function() {
      this.message = "Resignation accepted, beep boop beep boop";
      this.snackbar = true;
      await this.$fireAnalytics.logEvent('accept_button_clicked');
    },
    onReject: async function() {
      this.message = "...How? D:";
      this.snackbar = true;
      await this.$fireAnalytics.logEvent('reject_button_clicked', {
        items: [{ name: "reject_button" }]
      });
    }
  }
}
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