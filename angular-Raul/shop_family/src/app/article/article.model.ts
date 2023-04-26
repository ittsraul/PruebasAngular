export class Article{
    private id: number;
    private name: string;
    private image: string;
    private price: number;

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

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }
  constructor(
    id: number,
    name: string, 
    image: string, 
    price: number
) {
    this.id = id
    this.name = name
    this.image = image
    this.price = price
  }    
}