export interface Title {
    title: string;
}

export interface Comments {
    id: number;
    rating: number;
    comment: string;
    author: string;
    date: string;
}

export interface Dish {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    comments:Comments[];
}

export type SelectedDish = Dish | null


