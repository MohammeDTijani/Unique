const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  console.log(median([1,2,3,4,5,6,6,7,8,,8,,989,8,9,8,9,67,6,6,455,4,54,5,45,4,54,5,45,4,5,45,4,5,4,5,4,54,4,233,32,65,,34,,64,5,6,34,56,43,65,43,6,,5]));
  