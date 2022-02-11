import { ref } from "vue";
import { db } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  // register the db collection reference
  let collectionRef = db.collection(collection).orderBy("createdAt");
};

export default getCollection;
