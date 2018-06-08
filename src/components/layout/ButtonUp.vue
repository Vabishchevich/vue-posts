<template>
<transition name="fade">
    <button id="scrollup" v-show="coord >= 200" class="scroll-btn"  @click="smoothJumpUp()"><i class="little material-icons">expand_less</i></button>
</transition>
</template>

<script>
export default {
    name: 'ButtonUp',
    data(){
        return {
            coord: window.pageYOffset
        };
    },
    methods: {
        backToTop() {
            return this.coord = window.pageYOffset;
        },
        smoothJumpUp() {
            var scrollUp = document.getElementById('scrollup');
            scrollUp.onclick = function() {
            window.scrollTo(0, 0); 
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.backToTop)
    },
    destroyed() {
        window.removeEventListener('scroll', this.backToTop)
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.scroll-btn {
    position: fixed;
    bottom: 200px;
    right: 30px;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #757575;
}
</style>
