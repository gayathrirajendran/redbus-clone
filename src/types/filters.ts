export interface FilterModel {
    amenities?: FilterOptionModel[];
    operator?: FilterOptionModel[];
    droppingPoint?: FilterOptionModel[];
    arrivalTime?: FilterOptionModel[];
    departureTime?: FilterOptionModel[];
    generic?: FilterOptionModel[];
}

export interface FilterOptionModel {
    label: string;
    value: string | number;
    count?: number;
}