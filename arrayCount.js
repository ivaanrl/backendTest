const repeat_Count = (arr, len) => {
  const arrMap = {};

  let maxElem = arr[0];
  let maxCount = 1;
  for (let i = 0; i < len; i++) {
    const elem = arr[i];
    if (arrMap[elem] == null) {
      arrMap[elem] = 1;
    } else {
      arrMap[elem]++;
      if (arrMap[elem] > maxCount) {
        maxElem = elem;
        maxCount = arrMap[elem];
      } else if (arrMap[elem] == maxCount) {
        if (maxElem > elem) {
          maxElem = elem;
          maxCount = arrMap[elem];
        }
      }
    }
  }
  return maxElem;
};
