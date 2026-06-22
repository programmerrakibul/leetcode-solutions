function toHex(num: number): string {
    if (num === 0) return "0";

    return ((num) >>> 0).toString(16);
};
