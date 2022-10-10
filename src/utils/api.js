import {
    getDocs,
    onSnapshot,
} from "firebase/firestore";

import db, {
    colRef,
} from "../index";

// firestore get data
export async function getBooks() {
    const querySnapshot = await getDocs(colRef);
    return querySnapshot.docs
}

// export async function getBooks(callback) {
//     const snapshot = onSnapshot(colRef, doc => {
//         callback(doc)
//     }) 
// }