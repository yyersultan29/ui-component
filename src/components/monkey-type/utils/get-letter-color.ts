import { LetterStatus } from "../types";


export const getLetterColor = (status: LetterStatus) => {
    switch(status) {
        case LetterStatus.ERROR:
            return 'red';
        case LetterStatus.SUCCESS:
            return 'green';
        default:
            return 'black';
    }
}