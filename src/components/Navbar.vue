<template>
  <nav v-if="user">
    <div>
      <p>Hey {{ user.displayName }}</p>
      <p class="email">currently logged in as {{ user.email }}</p>
    </div>
    <button @click="logoutChat">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();

    const logoutChat = async () => {
      await logout();
      if (!error.value) {
        console.log("User Logout");
      }
    };

    return { error, user, logoutChat };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: rgb(255, 250, 250);
}
nav p.email {
  font-size: 14px;
  color: rgb(167, 161, 161);
}
</style>
