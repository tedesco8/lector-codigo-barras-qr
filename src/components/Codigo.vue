<template>
  <div>
    <div class="principal">
      <h1>Código</h1>
    </div>
    <div class="boton">
      <input type="button" value="Escanear código" @click="scan()" />
    </div>
  </div>
</template>

<script>
import cordova from "vue-cli-plugin-cordova";
export default {
  name: "Codigo",
  methods: {
    scan() {
      cordova.plugins.barcodeScanner.scan(
        function(result) {
            console.log(result)
            console.log(result.text)
        },
        function(err) {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style></style>
