function oddAverage(numbers)
{
    let sum = 0;
    let count = 0;
    for (const number of numbers)
    {
        if (number % 2 !== 0)
        {
            console.log(number);
            sum += number;
            count++;
        }
    }
    console.log(sum);
    console.log(count);
    return sum / count;
}

const numbers = [42 , 13, 58, 65, 81, 96, 7, 5];
const avg = oddAverage(numbers);
console.log(avg); // 52.75