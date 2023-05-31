export function ProductCard ({product}: any)  {
    return  (
        <div className="product-card">
            <span className={product.inStock >= 1 ? "in-stock" : "sold-out"}>{product.kind}</span>
            <img src={product.imgUrl} alt={product.name} className={product.inStock >= 1 ? "in-stock" : "sold-out"}/>
            <h2>{product.name}</h2>
            <h4>{product.inStock >= 1 ? "R$ " + product.price : "SEM ESTOQUE"}</h4>
            <p>{product.description}</p>
            <a href={product.inStock >= 1 ? "youtube.com" : "google.com"} target="blank">
                <button>
                    {product.inStock >= 1 ? "Adicionar ao Carrinho" : "Avise-me"}
                </button>
            </a>


        </div>
    )
}