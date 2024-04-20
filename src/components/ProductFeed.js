import Product from "./Product"

function ProductFeed({ products }) {
  return (
    <div>
        <h1>Products here</h1>
        {products.map(({ id, title, price, desciription, category, image }) =>(
            <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={desciription}
                category={category}
                image={image}
            />
        ))}
    </div>
  )
}

export default ProductFeed