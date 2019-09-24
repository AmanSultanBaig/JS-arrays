// Array concepts using JS

// filters in Array

// Q: Filter those entries from array which have 
//done 10 years or more then 10?

const arr = [
{startDate:1990, endDate:2003},
{startDate:1999, endDate:2006},
{startDate:1998, endDate:2020},
{startDate:1994, endDate:2011},
{startDate:1991, endDate:1999},
];

//array.filter 
/* Ans */ const filterData = arr.filter((temp) => {
    return temp.endDate - temp.startDate >= 10
})
console.log("Those object filtered which have done 10 years or more",filterData)

// Q: if array have missing number so find and add that ?
const missing_arr = [1,2,4,6,7,8,9,20];

//array.includes
/* Ans: */ for (let i = 1; i <= 20; i++) {
    (!missing_arr.includes(i)) ? console.log("These number were missed ",i) : "No Missing Number Found!"
}

// Q: Compare two arrays and their values, only fetch same values & should not repeat?
const arrOne = [1,2,3,4,5,7,9];
const arrTwo = [1,3,5,7,8,9,22];

/** Ans: */for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
        (arrOne[i] === arrTwo[j]) ? console.log("Same values of Array",arrOne[i]) : ""
    }
}

// Q: Print two arrays together ?
const arr1 = ['Aman'];
const arr2 = ['Sultan Baig'];

/** Ans: */ const getTogther = arr1.concat(arr2);
console.log('Two array has concated',getTogther);

// Q: Find Largest number in array?
const largeNumArr = [12,45,78,54,89,55,99,69];

/** Ans: */ const getLargeNum = Math.max(...largeNumArr)
        console.log("We Found Largest Number", getLargeNum)
 

// Q: Get last value of Array
const lastArr = [1,3,5,7,9,7,75,3,4,56,5,40];
/** Ans */ const getLastNum = lastArr[lastArr.length-1];
console.log("We Found Last Number of Array", getLastNum)


// Q: Get index which have value should be more then 66 ?

const indexArr = [
    {Num:34},
    {Num:66},
    {Num:44},
    {Num:33},
    {Num:77},
    {Num:85},
]

/** Ans */ const getIndex = indexArr.findIndex((temp) => {
       return temp.Num > 66;
})
console.log("Index Found!", getIndex);
