<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
    ></textarea>
    <div v-if="error" class="error">{{ error }} blah</div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
  .error {
    text-align: center;
    color: #ff2a58;
    font-size: 12px;
    padding: 10px 0;
  }
</style>
