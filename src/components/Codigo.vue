<template>
  <div>
    <div class="principal">
      <h1>Código</h1>
    </div>
    <input v-model="barcodeValue" /><br />
    <barcode :value="newBarcodevalue" :tag="tag" :options="options">
      Show this if the rendering fails.
    </barcode>
  </div>
</template>

<script>
import bcrypt from 'bcryptjs'
import VueBarcode from "vue-barcode";
export default {
  name: "Codigo",
  data() {
    return {
      barcodeValue: "test",
      newBarcodevalue: "",
      tag: "svg",
      rounds: 10,
      options: {
        lineColor: "#ff7069",
        fontSize: 32,
        font: "Courier",
        width: 1,
        height: 100,
        marginBottom: 60,
        format: "CODE39",
        background: "#ccffff",
      },
    };
  },
  components: {
    barcode: VueBarcode,
  },
  watch: {
    barcodeValue(nuevoValor, valorAnterior){
      console.log("El nombre pasó de ser %s a %s", valorAnterior, nuevoValor);
      this.hashValue(nuevoValor)
    }
  },
  methods: {
    async hashValue() {
      const hash = await bcrypt.hash(this.barcodeValue, this.rounds);
      console.log(hash);
      console.log(await bcrypt.compare(this.barcodeValue, hash));
      this.newBarcodevalue = hash
    },
    // scan() {
    //   cordova.plugins.barcodeScanner.scan(
    //     function(result) {
    //       console.log(result);
    //       console.log(result.text);
    //     },
    //     function(err) {
    //       console.log(err);
    //     }
    //   );
    // },
  },
};
</script>

<style></style>
