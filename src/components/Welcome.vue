<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <p>Please login or signup to continue</p>
        <Login />
<!--         <form @submit.prevent="enterChat">
          <label for="name">Please login to continue </label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text"> {{ feedback }} </p>
          <button class="btn teal">Enter Chat</button>
        </form> -->
      </div>
    </div>
    
    
  </div>
</template>

<script>
import Login from '@/components/auth/Login'
export default {
  name: 'Welcome',
  components: {
    Login
  },
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if (this.name){
        /* si name es true (hay name en el imput) 
        pusheamos route a componente Chat */
        this.$router.push({ name: 'Chat', params: { name: this.name } }) 
      } else {
        this.feedback ="You must enter a name to join"
      }
    }
  }
}
</script>


<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2{
  font-size: 3ms;
}
.welcome button{
  margin: 30px auto;
}

</style>
