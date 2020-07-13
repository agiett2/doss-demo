export interface TableDataRowInterface {
  selected: boolean;
  readonly name: string;
  price: number;
  readonly selectOptions?: { name: string; price: number }[];
  readonly isRequired: boolean;
}
