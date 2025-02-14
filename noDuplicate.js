function noDuplicate(arr) {
    const ar = [];

    for(const item of arr) {
        if (ar.includes(item)) {
            continue;           
        }
        else
        {
            ar.push(item);
        }
    }
    return ar;
}


birianikhor = ['abul', 'babul' , 'cabul' , 'abul' , 'babul' , 'dabul']

const uniqueArray = noDuplicate(birianikhor);
console.log(uniqueArray);