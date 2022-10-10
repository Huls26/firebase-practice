import { async } from "@firebase/util";
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

export async function onSnapShotBooks() {
    let querySnapshot
    let data = onSnapshot(colRef, data => {
        const dataBooks = data.docs.map(doc => ({
                                        ...doc.data(),
                                        id: doc.id,
                                }))
       querySnapshot = dataBooks;
    })

    return querySnapshot
}

// export async function getBooks(callback) {
//     const snapshot = onSnapshot(colRef, doc => {
//         callback(doc)
//     }) 
// }