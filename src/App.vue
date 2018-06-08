<template>
  <div id="app">
    <layout>
      <router-view/> <!-- Это функциональный компонент, отображающий соответствующее текущему пути представление -->
    </layout>
  </div>
</template>

<script>
import Layout from './components/layout/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
</style>