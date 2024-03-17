import { ref } from 'vue';
import { defineStore } from 'pinia';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db, auth } from '../firebaseConfig';

export const useUrlsStore = defineStore('urls', () => {
  const documents = ref([]);

  const getUrls = async () => {
    try {
      // Create the query
      // query and collection are imported from 'firebase/firestore/lite'
      // db is the data base that we config on the firebaseConfig file.
      const q = query(
        collection(db, 'urls'),
        where('user', '==', auth.currentUser.uid)
      );
      // where() is a filter. It goes inside the query but outside the collection
      // where() => ('{property name}', '{condition}', '{value to check}')
      // auth is imported from our firebaseConfig file and get us the current user

      // We call the db from our firebaseConfig file
      // getDocs is imported from 'firebase/firestore/lite'
      // We need to pass the query
      const querySnapshot = await getDocs(q);

      // We can also pass the query directly to getDocs instead of declare a variable
      // const querySnapshot = await getDocs(collection(db, 'users'));

      // We use the info in our data base
      querySnapshot.forEach((doc) => {
        // .data() is a method that the document bring us
        // It returns an object with all the data in the db
        console.log('doc.id', doc.id);
        console.log('doc.data()', doc.data());
        documents.value.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return {
    documents,
    getUrls,
  };
});
