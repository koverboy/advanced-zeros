module.exports = function getZerosCount(number, base) {
    let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];

    let arr2 = [];
    let first = 0;
    let chk = 0;
    let second = 0;
    let chk2 = 0;
    arr.reverse();

    do {
        for (let i = 0; i < arr.length; i++) {
            if (base % arr[i] === 0) {
                base = base / arr[i];
                arr2.push(arr[i]);
            }
        }
    } while (base > 1);

    for (let n = 1; Math.pow(arr2[0], n) <= number; n++) {
        first = first + Math.floor(number /( Math.pow(arr2[0], n)));
    }

    for (let n = 0; n < arr2.length; n++) {
        if (arr2[0] === arr2[n]) {
            chk++;
        }
    }

    if (arr2.length > 1) {
        for (let n = 1; Math.pow(arr2[1], n) <= number; n++) {
            second = second + Math.floor(number / (Math.pow(arr2[1], n)));
        }

        for (let n = 0; n < arr2.length; n++) {
            if (arr2[1] === arr2[n]) {
                chk2++;
            }
        }

        return Math.floor(first / chk) < Math.floor(second / chk2) ? Math.floor(first / chk) : Math.floor(second / chk2);
    }

    return Math.floor(first / chk);
};