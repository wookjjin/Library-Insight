<script setup>
import { ref } from 'vue'

const map = ref()
const zoom = ref(10)
</script>

<template>
  <div style="height:100vh; width:100vw">
    <LMap ref="map" :zoom="zoom" :center="[37.5642135, 127.0016985]">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base" name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>
