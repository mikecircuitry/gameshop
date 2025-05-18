
export interface Cart {
    id:number;
    itemCount: number;
    items: Product[];
}

export interface Product {
    id: number;
    name: string;
    image: string;
    quantity: number;
}