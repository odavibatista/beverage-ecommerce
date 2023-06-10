export class Product   {
    protected name
    protected description
    protected kind
    public price
    protected imgUrl
    public cathegory
    public inStock
    public onSale?

    constructor(name: string, description: string, kind: string, price: number, imgUrl: string, cathegory: string, inStock: number, onSale = false) {

        this.name = name
        this.description = description
        this.kind = kind
        this.price = price
        this.imgUrl = imgUrl
        this.cathegory = cathegory
        this.inStock = inStock
        this.onSale = onSale


    }
}