const getTheTitles = function (arr) {
    const titleArray = [];

    for (let i = 0; i < arr.length; i++) {
        titleArray.push(arr[i].title);
    }

    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
