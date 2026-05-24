// <!--W_---------------{  Create  Date : 03/03/2026  }---------------_-->
// <!--W_---------------{  Last Update  : 03/03/2026  }---------------_-->
// <!--W_---------------{  Practice File  }---------------_-->
// function longestCommonPrefix(strs: string[]): string {
//   let common: string = "";
//   for (let i: number = 0; i < strs.length - 1; i++) {
//     const str = strs[i];
//     const next = strs[i + 1];
//     if (str[0] === next[0]) {
//       for (let j = 0; j < str.length && j < next.length; j++) {
//         if (str[j] === next[j]) {
//           common += str[j];
//         } else {
//           break;
//         }
//       }
//     } else {
//       common = "Not match any char!";
//     }
//   }
//   return common;
// }
// // const result = longestCommonPrefix(["carr", "bus", "track"]);
// const result = longestCommonPrefix(["carr", "ca", "cadde"]);
// console.log(result);
function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0)
        return "";
    var common = strs[0];
    for (var i = 1; i < strs.length; i++) {
        var next = strs[i];
        var temp = "";
        for (var j = 0; j < common.length && j < next.length; j++) {
            if (common[j] === next[j]) {
                temp += common[j];
            }
            else {
                break;
            }
        }
        common = temp;
    }
    return common;
}
var result = longestCommonPrefix([]);
console.log(result);
// function longestCommonPrefix(strs: string[]): string {
//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     while (!strs[i].startsWith(prefix)) {
//       prefix = prefix.slice(0, -1);
//     }
//   }
//   return prefix;
// }
