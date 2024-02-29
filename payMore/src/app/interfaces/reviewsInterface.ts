export interface reviews {
    id: number;
    product: {
        id: number;
        price?: number;
        color?: any;
        gender?: any;
        category?: any;
        quantity?: number;
        seller?: {};
        reviews?: {};
        orders?: {};
        imageUrl?: string;
        description?: string;
    };
    content: string;
    rating: number;
}