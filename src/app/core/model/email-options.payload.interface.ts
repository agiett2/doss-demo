export interface EmailOptionsPayloadInterface {
    readonly from: string;
    readonly to: string;
    readonly subject: string;
    readonly html: string;
}
