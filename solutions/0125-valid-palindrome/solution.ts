function isPalindrome(s: string): boolean {
    const original = s.trim().toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '')
    return original === original.split("").reverse().join("")

};
