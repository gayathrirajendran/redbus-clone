export interface BusModel {
    id: number | string;
    name: string;
    busType: string;
    seatOffering: '2+2' | '2+1',
    duration: string;
    startTime: string;
    endDate: string;
    endTime: string;
    rating: string;
    startingPrice: string;
    totalAvailability: number;
    singleSeatsAvailability: number;
    startPoint: string;
    destinationPoint: string;
    facilities?: string[];
    tags: string[];
}

export interface SeatModel {
    isAvailable: boolean; 
    price: string; 
    seatNo: string;
}