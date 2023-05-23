export class Article{
    private id: number;
    private name: string;
    private image: string;
    public description: string;
    private price: number;
    private oldPrice: number;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }


    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getOldPrice(): number {
        return this.oldPrice;
    }

    public setOldPrice(oldPrice: number): void {
        this.oldPrice = oldPrice;
    }
  constructor(
    id: number,
    name: string, 
    image: string,
    description: string, 
    price: number,
    oldPrice: number
) {
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    this.price = price
    this.oldPrice = oldPrice
  }    
}