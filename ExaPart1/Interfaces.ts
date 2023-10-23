

export interface IBus{
    id: number;
    busNumber: number;
    brand: string;
    model: string;
    capacity: number;
    routes: IRoute[];
}

export interface IRoute{
    id: number;
    start: string;
    destination: string;
    distance: number;
    busId: number;
}