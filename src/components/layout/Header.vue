<template>
<div class='header-base'>
  <nav>
    <div class='nav-wrapper'>
      <div class='container'>
      <ul>
        <li class='lefth hide-on-met-and-down'><a href='http://heapix.com/'>Heapix</a></li>
        <ul class='right hide-on-met-and-down'>
          <li><a class="dropdown-trigger" data-target="dropdown1">{{$t('hello.Language')}}<i class="material-icons right">arrow_drop_down</i></a></li>
          <li key="dropdown" class="dropdown-list">
            <ul id="dropdown1" class="dropdown-content">
        <!-- <li><a class="dropdown-trigger"><i class="material-icons right">arrow_drop_up</i></a></li> -->
              <li @click="change">Ru</li>
              <li class="divider"></li>
              <li @click="change">En</li>
            </ul>
          </li>
      </ul>
        <li class='right hide-on-met-and-down'><router-link to='/posts'>{{$t('hello.navbar.posts')}}</router-link></li>
        <li class='right hide-on-met-and-down'><router-link to='/posts/create'>{{$t('hello.navbar.create')}}</router-link></li>
        <li class='right hide-on-met-and-down'><router-link to='/users'>{{$t('hello.navbar.users')}}</router-link></li>
        <li class='right hide-on-met-and-down'><router-link to='/photos'>{{$t('hello.navbar.photos')}}</router-link></li>
      </ul>
      </div>
    </div>
  </nav>
</div>
</template> 

<script>
import {changeLanguage, getLanguage} from '@/assets/libs/locale'
export default {    
  name: 'Header',
  methods: {
  change(){
      let locale = getLanguage(this);
      if(locale=='ru')
        changeLanguage(this,'en')
      else
        changeLanguage(this, 'ru')
      }
  },
  mounted() {
    let elem = document.querySelector('.dropdown-trigger');
    if (elem) {
      M.Dropdown.init(elem)
    }
  }
}
</script>

<style lang='scss'
@import '@/assets/scss/index.scss'
</style>
