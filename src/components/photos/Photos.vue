<template>
<div v-if="photos && photos.length">
    <div class="row">
      <h5>View photos</h5>
      <br>
      <div class="progress">
        <div class="indeterminate"></div>
        </div>
        <br>
        <ul class="photos" v-for="photo in photos" :key="photo.id">
            <li><strong>Album Id: </strong>{{photo.albumId}}</li>
            <li><strong>Id: </strong>{{photo.id}}</li>
            <li><strong>Title: </strong>{{photo.title}}</li>
            <li><strong>Url: </strong>{{photo.url}}</li>
            <li><strong>ThumbnailUrl: </strong>{{photo.thumbnailUrl}}</li>
            </ul>
          <br>
          </div>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>  
<!-- </div> -->
</div>
</template>

<script>
import PlaceholderPhotos from '@/services/json_placeholder/photos/PhotosServices.js';
import { mapGetters } from 'vuex';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Photos',
  components: {
    InfiniteLoading
  },
  computed: {
    ...mapGetters([
      'photos',
      'photosLength'
    ])
  },
  created() {
    PlaceholderPhotos.getPhotos(0, 5)
  },
  methods: {
    getMorePhotos(n) {
      PlaceholderPhotos.getPhotos(n, 3)
    },
    infiniteHandler(photos) {
      setTimeout(() => {
        this.getMorePhotos(this.photosLength);
        photos.loaded();
      }, 3000);
    }
  }
}
</script>

<style>
</style>
