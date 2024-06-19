import React from 'react'

const Category_product = ({ title, image,specs, features,price,Stock}) => {
    return (
        <article>
            <div className='category-product-title'>
                {title}
            </div>

            <figure>
                <div className='category-product-image-container'>
                    <img src={`src/assets/${image}`} alt={title} />
                </div>
            </figure>

            <aside>
                <div className='category-product-info-dimensions'>
                    <h3>Dimensions</h3>
                    <label >{specs.dimensions} </label>
                </div>
                {specs.capacity &&
                    <div className='category-product-info-capacity'>
                        <h3>Capacity</h3>
                        <label >{specs.capacity} </label>
                    </div>
                }
                {specs.frecuency &&
                    <div className='category-product-info-frecuency'>
                        <h3>Frecuency</h3>
                        <label >{specs.frecuency} </label>
                    </div>
                }

                <div className='category-product-info-features'>
                    <h3>Features</h3>
                    <ul>
                        {features?.map((f) =>{
                            return <li>{f}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <aside>
                <div className="category-product-finance-price">
                    &euro;{price}
                </div>

                <div className='category-product-info-stock'>
                    <label>Stock Level: {Stock}</label>
                    <label>Free Delivery</label>
                </div>

                <div className='category-product-action'>
                    <button>View Product</button>
                    <button>Add to Cart</button>
                </div>
            </aside>
        </article>
    )
}
// ?: used because features may not necessarily exist
export default Category_product;