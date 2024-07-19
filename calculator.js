
export function add(numbers) {
    if (numbers === "")
        return 0;
    else if (numbers.length > 1)
        return parseInt(numbers[0]) + parseInt(numbers[2])
    else
        return parseInt(numbers[0])

}