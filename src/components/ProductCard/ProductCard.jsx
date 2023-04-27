import { products } from "../../Classes/Products/List/ShopProducts.js"

export function ProductCard ({name, description, kind, price, imgUrl})  {
    return  (
        <div className="product-card">
            <span>{kind}</span>
            <img src={imgUrl} alt={name}/>
            <h2>{name}</h2>
            <h4>R$ {price}</h4>
            <p>{description}</p>
            <button>Adicionar ao Carrinho</button>
        </div>
    )
}