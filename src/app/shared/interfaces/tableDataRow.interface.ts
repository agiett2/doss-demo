export interface TableDataRowInterface {
    selected: boolean;
    readonly menu: string;
    price: number;
    readonly selectOptions?: { menu: string; price: number; }[];
    readonly isRequired: boolean;
}