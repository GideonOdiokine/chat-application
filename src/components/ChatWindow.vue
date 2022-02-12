<template>
  <div class="chat-window">
    <h2>Chat Messages</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments" class="messages">
      <div
        v-for="(doc, index) in formattedDocuments"
        :key="doc.id"
        class="single"
      >
        <div class="container" :class="{ darker: index % 2 === 1 }">
          <div>
            <span class="name">{{ doc.name }}</span>
            <p>{{ doc.message }}</p>
            <span
              :style="[
                index % 2 === 1
                  ? 'float: left; color: #as2'
                  : 'float: right; color: #aa3 ',
              ]"
              >{{ doc.createdAt }} ago</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { computed } from "vue";
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    const { error, documents } = getCollection("messages");
    // format timestamp
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });
    return { error, documents, formattedDocuments };
  },
};
</script>

<style scoped>
h2 {
  padding: 20px;
}
.container {
  width: auto;
  max-width: auto;
  margin: 80px auto;
  border-radius: 20px;
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}
/* Darker chat container */
.darker {
  border-color: #ccc;
  background-color: #ddd;
}

/* Clear floats */
.container::after {
  content: "";
  clear: both;
  display: table;
}

/* Style images */
.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

/* Style the right image */
.container img.right {
  float: right;
  margin-left: 20px;
  margin-right: 0;
}

/* Style time text */
.rightTime {
  float: right;
  color: #aaa;
}

/* Style time text */
.timeleft {
  float: left;
  color: #999;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;

  overflow: auto;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}
/* .right {
  position: relative;
} */
</style>
