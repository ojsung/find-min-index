/**
 * A function to find the index of the least, defined number in an array.  If there is an index to be ignored, it will ignore that index.
 * @param numArray The array of numbers to search for the minimum value
 * @param indicesToIgnore Optional. An array of numbers that signify indices to ignore when searching for the minimum.
 * @returns a number indicating the index in the array of the least value.  If a non-empty indicesToIgnore was provided, it will return -1 if all indices failed or were ignored.
 */
export declare function findMinIndex(numArray: number[], indicesToIgnore?: number[]): number;
