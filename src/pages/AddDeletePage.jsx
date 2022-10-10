import App from "../components/App";
import Home from "../components/Home";

export default function AddDelete() {
    return (
        <main className="addDelete-container">
            <section className="form-container">
                <App />
            </section>

            <section className="books-display">
                <Home />
            </section>
        </main>
    )
}