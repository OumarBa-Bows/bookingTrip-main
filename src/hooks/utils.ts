export const splitNumberToArrayOfNumber = (length : number) => {
    const array: number[] = Array.from({ length: length }, (_, i) => i + 1);
    return array;
}