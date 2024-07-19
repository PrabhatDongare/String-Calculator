
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
    return numArr.reduce((sum, num) => sum + parseInt(num), 0);
}