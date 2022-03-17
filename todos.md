## The user stories for this project includes:

User story: I can see a list of properties
User story: I can see the property card with a name, rating, apartment type, and super host
User story: I can open the filter drawer
User story: I can filter properties by location and number of guests
User story: I can see the number of filtered items
User story: I can see pages following given designs

## getting multiple documents from a collection using "where" keyword

import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
console.log(doc.id, " => ", doc.data());
});

## getting all documents omitting the keyword

import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
console.log(doc.id, " => ", doc.data());
});
