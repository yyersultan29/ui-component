import { LetterStatus } from "../types";


export const mapLetters = (text: string) => {
   
    const arr = [];
    for(let i = 0;i < text.length;i++) {
        const letter = text[i];
        arr.push({
            char: letter,
            status: LetterStatus.NEUTRAL,
            index: i
        })
    }
    return arr;
}