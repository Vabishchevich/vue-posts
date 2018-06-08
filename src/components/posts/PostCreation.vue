<template>
    <div class="row">
    <div class="col s12">
      <div class="container"> 
      <h5 style="text-align: center;font-style:italic">Post Creation</h5>
      <br>
      <div class="progress">
      <div class="indeterminate"></div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">mode_edit</i>
          <input type="number" step="1" min="1" max="50" onkeypress="return event.charCode >= 48" v-model="postUserId" required/>
          <label for="autocomplete-input">UserId</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">mode_edit</i>
          <textarea type="text" v-model="postTitle" class="materialize-textarea" required></textarea>
          <label for="autocomplete-input">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">mode_edit</i>
          <textarea type="text" v-model="postBody" class="materialize-textarea" required></textarea>
          <label for="autocomplete-input">Body</label>
        </div>
       </div>
      <center><a class="waves-effect waves-light btn" @click="postPost()" style="font-style:italic"><i class="material-icons left">cloud</i>Post</a></center>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceholderPosts from "@/services/json_placeholder/posts/index.js";
export default {
    name: 'PostCreation',
    data() {
    return {
      postUserId: null,
      postTitle: '',  
      postBody: ''
    }
  },
  methods: {
    postPost() {
      PlaceholderPosts.postNewPost({
        userId: this.postUserId,
        title: this.postTitle,
        body: this.postBody
      })
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/index.scss';
</style>
