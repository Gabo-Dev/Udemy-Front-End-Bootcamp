import React, { useState } from "react";
import '../css/styles.css'
import Category from "./Category";
import { getCategories,getProducts } from "../fetcher";

export function App() {
    // to manipulate our JSON data when it come back from our JSON server
    const [categories, setCategories] = useState({ errorMessage: '', data: [] });
    const [products, setProducts] = useState({ errorMessage: '', data: [] });

    // fetch API
    React.useEffect(() => {
        // to get properly ur data back
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject);
        }
        fetchData();
    }, [])

    const handleCategoryClick = (id) => {
        // query to check category id of each product
        // to get properly ur data back
        const fetchData = async () => {
            const responseObject = await getProducts(id);
            setProducts(responseObject);
        }
        fetchData();
    }

    const renderCategories = () => {
        return categories.data.map(c =>
            <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)} />
        )
    }

    const renderProducts = () => {
        return products.data.map(p =>
            <div>{p.title}</div>
        )
    }

    return (
        <>
            <header>
                Gabo Store
            </header>
            <section>
                <nav>
                    {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
                    {categories.data && renderCategories()}
                </nav>
                <article>
                    {products.errorMessage && <div>Error: {products.errorMessage}</div>}
                    <h1>Products</h1>
                    {products && renderProducts()}
                </article>
            </section>
            <footer>
                <p>&copy; 2024 Gabo S.L.</p>
            </footer>
        </>
    )
}