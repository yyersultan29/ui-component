export interface Letter {
    char: string;
    status: LetterStatus,
    index: number
}
export enum LetterStatus  {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    NEUTRAL = 'NEUTRAL'

}