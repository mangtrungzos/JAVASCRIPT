
let str = "hello world and practice";

function getLongestStr(str) {
    const strArr = str.split(' ');
    // console.log(strArr);

    let longestStr = '';
    for (let strs of strArr) {
        if (strs.length > longestStr.length) {
            longestStr = strs;
        } 
    }
    return longestStr;
}

let result = getLongestStr(str);

console.log(result);
    

// India way to resolve:
const strWord = "hello world and practice";
function getLongestWord(strWord) {
    const res = strWord.split(' ');
    const ans = []; // [5, 5, 3, 7]

    for (let i = 0; i < res.length; i++) {
        ans.push(res[i].length);
    }

    let maxLength = 0;
    let index;
    for (let i = 0; i < ans.length; i++){
        if (ans[i] > maxLength) {
            maxLength = ans[i];
            index = i;
        }
    }
    return res[index]; // practice
}

// const res = getLongestWord(strWord);

console.log(getLongestWord(strWord));