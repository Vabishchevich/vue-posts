<template>
<div>
  <div v-if="posts && posts.length">
    <div class="row">
      <h5>View posts</h5>
      <br>
      <div class="progress">
        <div class="indeterminate"></div>
        </div>
        <br>
        <ul v-for="post in posts" :key="post.id">
          <li><strong>Post Id: </strong>{{post.id}}</li>   
          <li><strong>UserId: </strong>{{post.userId}}</li>
          <li><strong>Title: </strong>{{post.title}}</li>
          <li><strong>Text: </strong>{{post.body}}</li>
          <br>
          <button  class="waves-effect waves-light btn-small" @click="show = !show" :aria-expanded="show ? 'true' : 'false'" style="font-style:italic"><i class="material-icons left">edit</i>Edit this post</button>
          <button class="waves-effect waves-light btn-small red" @click="deletePost(post.id)" style="font-style:italic"><i class="material-icons left">delete</i>Delete this post</button>
        <ul v-if="show"> 
        <br>
        <h5>Change the contents of the post</h5>
          <li><input v-model="post.id" type="text" placeholder="postId" readonly/></li>
          <li><input v-model="post.userId" type="text" placeholder="UserId" readonly/></li>
          <li><input v-model="post.title" type="text" placeholder="Title"/></li>
          <li><input v-model="post.body" type="text" placeholder="Text"/></li>
          <br>
          <button class="waves-effect waves-light btn-small red" @click="editThisPost(post.id, post.userId, post.title, post.body)" style="font-style:italic"><i class="material-icons left">edit</i>Edit</button>
          <br>
        </ul>
        <br>
      </ul>
     </div>
   </div>
</div>
</template>

<script>
import PlaceholderPosts from "@/services/json_placeholder/posts/index.js";
import { mapGetters } from "vuex";
export default {
  name: "Posts",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapGetters([
      "posts"
      ])
  },
  created() {
    //Метод в хуке created() будет вызываться после создания экземпляра Vue и после установки настроек обращения к данным
    PlaceholderPosts.getAllPosts();
  },
  methods: {
    editThisPost(id, userId, title, body) {
      PlaceholderPosts.editPost(id, userId, title, body);
    },
    deletePost(id) {
      PlaceholderPosts.deleteThisPost(id);
    }
  }
};
</script>

<style lang='scss'>
@import '@/assets/scss/index.scss';
</style>
