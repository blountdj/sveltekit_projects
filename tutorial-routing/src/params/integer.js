// Use regex to check if param is an integer and returns bool
// name MUST be match
export function match(param) {
    return /^\d+$/.test(param);
}
