function sortAlphabet(str) {
    if (str.length <= 1) {
      return str.toUpperCase();
    } else {
      const leftStr = str.slice(0, Math.floor(str.length / 2));
      const rightStr = str.slice(Math.floor(str.length / 2));
      const sortedLeftStr = sortAlphabet(leftStr);
      const sortedRightStr = sortAlphabet(rightStr);
      return merge(sortedLeftStr, sortedRightStr);
    }
   }
   
   
   function merge(leftStr, rightStr) {
    let mergedStr = "";
    let i = 0;
    let j = 0;
    while (i < leftStr.length && j < rightStr.length) {
      if (leftStr.charCodeAt(i) < rightStr.charCodeAt(j)) {
        mergedStr += leftStr.charAt(i);
        i++;
      } else {
        mergedStr += rightStr.charAt(j);
        j++;
      }
    }
    while (i < leftStr.length) {
      mergedStr += leftStr.charAt(i);
      i++;
    }
    while (j < rightStr.length) {
      mergedStr += rightStr.charAt(j);
      j++;
    }
    return mergedStr.toUpperCase();
   }
   
   
   const str = "poiuytrewqlkjhgfdsamnbvcxz";
   const sortedStr = sortAlphabet(str);
   console.log(sortedStr);