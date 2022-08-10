const findTheOldest = function (arr) {

    let old = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {

        var a = 0;
        var b = 0;
        const currentYear = new Date().getFullYear();

        if (arr[i].yearOfDeath === undefined) {
            a = currentYear - arr[i].yearOfBirth;
        }
        else {
            a = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
        if (arr[i+1].yearOfDeath === undefined) {
            b = currentYear - arr[i+1].yearOfBirth;
        }
        else {
            b = arr[i + 1].yearOfDeath - arr[i + 1].yearOfBirth;
        }

        if (b > a) {
            old = arr[i + 1];
        }
    }

    return old;
};

// Do not edit below this line
module.exports = findTheOldest;
