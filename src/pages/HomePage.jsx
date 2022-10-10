import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
    return (
        <div className="homepage">
                <header className="header">
                    <Navbar />
                </header>

                <main className="books-container">
                    <Outlet />
                </main>
        </div>
    )
}