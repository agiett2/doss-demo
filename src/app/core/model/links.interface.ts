export interface LinksInterface {
    readonly title: string;
    readonly path: string;
    readonly dropdown?: boolean;
    readonly id?: string;
    readonly children?: {readonly title: string, readonly path: string }[];
}
