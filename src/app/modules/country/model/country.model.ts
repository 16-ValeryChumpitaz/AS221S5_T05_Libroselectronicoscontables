export class ICountry {
    id!: number;
    names!: string;
    code!: string;
    active?: string;
}

export class ICountryDto {
    id!: number;
    names!: string;
    code!: string;
}