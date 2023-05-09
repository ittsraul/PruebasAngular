export class ArticleDetail {
    private id: number;
    private title: string;
    private image: string;
    private price: number;
    private size: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
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

    
    public getSize(): string {
        return this.size;
    }

    public setSize(size: string): void {
        this.size = size;
    }


    constructor(id: number, title: string, image: string, price: number, size: string){
        this.id = id;
        this.title = title;
        this.image = image;
        this.price = price;
        this.size = size;
    }
}