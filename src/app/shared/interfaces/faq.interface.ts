export interface FaqInterface {
    readonly question: string;
    readonly answer: string;
    readonly link?: { href: string, text: string };
}
