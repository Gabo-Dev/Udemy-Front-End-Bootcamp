import React, { useState } from "react";
import '../css/styles.css'
import Category from "./Category";
import { Fetcher } from "../fetcher";

export function App() {
    // to manipulate our JSON data when it come back from our JSON server
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    // fetch API
    React.useEffect(() => {
        // to get properly ur data back
        const fetchData  = async() =>{
            const data = await Fetcher("/categories");
            setCategories(data);
        }
        fetchData();
    }, [])

    const handleCategoryClick = (id) => {
        // query to check category id of each product
        fetch("http://localhost:5000/products?catId="+id)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProducts(data)
        })
    }

    const renderCategories = () =>{
        return categories.map(c =>
            <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)}/>
        )
    }

    const renderProducts = () =>{
        return products.map(p =>
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
                   {categories && renderCategories()}
                </nav>
                <article>
                    <h1>Products</h1>
                    { products && renderProducts()}
                </article>
            </section>
            <footer>
            <p>&copy; 2024 Gabo S.L.</p>
            </footer>
        </>
    )
}