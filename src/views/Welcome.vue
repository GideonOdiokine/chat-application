<template>
  <div class="welcome container">
    <p>Welcome page</p>
    <Signup />
  </div>
</template>

<script>
import Signup from "../components/SignUp.vue";
export default {
  components: { Signup },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>
