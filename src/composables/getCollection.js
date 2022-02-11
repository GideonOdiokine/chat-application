import { ref } from "vue";
import { db } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);
};

export default getCollection;
