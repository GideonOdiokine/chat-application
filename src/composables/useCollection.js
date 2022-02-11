import { ref } from "vue";
import { db } from "../firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await db.collection(collection).add(doc);
    } catch (error) {
      console.log("something went run");
      error.value = "could not send the message";
    }
  };
  return { addDoc, error };
};

export default useCollection;
