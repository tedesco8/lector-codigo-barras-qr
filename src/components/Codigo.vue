<template>
  <div>
    <div class="principal">
      <h1>Código</h1>
    </div>
    <input v-model="barcodeValue" /><br />
    <barcode :value="barcodeValue" :tag="tag" :options="options" >
      Show this if the rendering fails.
    </barcode>
  </div>
</template>

<script>
import VueBarcode from "vue-barcode";
export default {
  name: "Codigo",
  data() {
    return {
      barcodeValue: "test",
      tag: "svg",
      options: {
        lineColor: "#ff7069",
        fontSize: 32,
        font: "Courier",
        width: 3,
        height: 60,
        marginBottom: 60,
        format: "CODE39",
        background: "#ccffff",
      },
    };
  },
  components: {
    barcode: VueBarcode,
  },
  // methods: {
  //   scan() {
  //     this.$cordova.plugins.barcodeScanner.scan(
  //       function(result) {
  //         console.log(result);
  //         console.log(result.text);
  //       },
  //       function(err) {
  //         console.log(err);
  //       }
  //     );
  //   },
  // },
};
</script>

<style></style>
