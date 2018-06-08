<template>
<div>
    <div v-if="users && users.length">
    <div class="row">
      <h5>View users</h5>
      <br>
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
      <br>
        <table class="highlight">
        <thead>
          <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.id">
          <tr>
            <td><input v-model="user.username"/></td>
            <td><input v-model="user.name"/></td>
            <td><input v-model="user.email"/></td>
            <td><input v-model="user.website"/></td>
            <td><button class="waves-effect waves-light btn-small red" @click="deleteUser(user.id)" style="font-style:italic"><i class="material-icons left">delete</i>Delete</button>          
            <button class="waves-effect waves-light btn-small green" @click="editThisUser(user.id, user.username, user.name, user.email, user.website)" style="font-style:italic"><i class="material-icons left">edit</i>Edit</button></td>            
          </tr>
        </tbody>
      </table>
      </div>
    </div>
</div>
</template>

<script>
import PlaceholderUsers from "@/services/json_placeholder/users/UserServices.js";
import { mapGetters } from "vuex";
export default {
    name: 'Users',
    computed: {
    ...mapGetters([
      "users"
      ])
  },
  created() {
    //Метод в хуке created() будет вызываться после создания экземпляра Vue и после установки настроек обращения к данным
    PlaceholderUsers.getAllUsers();
  },
  methods: {
    editThisUser(id, username, name, email, website) {
      PlaceholderUsers.editUsers(id, username, name, email, website);
      
    },
    deleteUser(id) {
      PlaceholderUsers.deleteThisUser(id);
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/index.scss';
</style>
