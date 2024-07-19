
export function add(numbers) {
    if (numbers === "")
        return 0;
    const numArr = numbers.split(/[\n,]/);
    return numArr.reduce((sum, num) => sum + parseInt(num), 0);
}