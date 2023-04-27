export class Product   {
    protected name
    protected description
    protected kind
    protected price
    protected imgUrl
    protected cathegory

    constructor(name: string, description: string, kind: string, price: number, imgUrl: string, cathegory: string) {
        this.name = name
        this.description = description
        this.kind = kind
        this.price = price
        this.imgUrl = imgUrl
        this.cathegory = cathegory
    }
}