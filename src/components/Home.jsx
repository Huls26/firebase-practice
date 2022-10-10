import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { getBooks } from "../utils/api";
import { useLoaderData } from "react-router-dom";
import "./Home.css";

import Book from "./Book";



export async function loader() {
    let books = await getBooks();
    books = books.map(doc => ({...doc.data(), id: doc.id}));
    return { books }
}

export default function Home() {
    const { books } = useLoaderData();
    let [booksData, setBooksData] = useState(() => books);

    const booksElement = booksData.map(book => (<Book key={ book.id } data={ book } />));

    return (
        <div className="Home">
            { booksElement }
        </div>
    )
}