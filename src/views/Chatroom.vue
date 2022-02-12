<template>
  <Navbar />
  <div class="container">
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "@vue/runtime-core";

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const router = useRouter();
    const { user } = getUser();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
