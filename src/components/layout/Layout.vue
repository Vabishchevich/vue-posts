<template>
   <section class='layout'>
       <div class='header'>
           <header-base></header-base>
       </div>
       <div class="main">
      <div class="row">
        <div class="left-side-content col s2"></div>
        <div class="content col s8">
          <slot>
          </slot>
          <div class='buttonUp'>
           <buttonUp-base></buttonUp-base>
        </div>
        </div>
        <div class="right-side-content col s2"></div>
      </div>
    </div>
       <div class='footer'>
           <footer-base></footer-base>
       </div>
   </section>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer";
import ButtonUp from './ButtonUp'
export default {
  name: "Layout",
  components: {
    "header-base": Header,
    "footer-base": Footer,
    "buttonUp-base": ButtonUp,
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/index.scss';
</style>
