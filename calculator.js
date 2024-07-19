
export function add(numbers) {
    if (numbers === "")
        return 0;

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2);
        delimiter = parts[0].substring(2);
        numbers = parts[1];
    }

    const numArr = numbers.split(new RegExp(`[${delimiter}\n]`));
    const negative_nums = numArr.filter(num => parseInt(num) < 0);
    if (negative_nums.length > 0) {
        throw new Error(`negative numbers not allowed: ${negative_nums.join(",")}`);
    }

    return numArr.reduce((sum, num) => sum + parseInt(num), 0);
}
