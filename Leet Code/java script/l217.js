const containsDuplicate = function(nums) {
    const hash = {};
    for (let el of nums) {
      if (hash.hasOwnProperty(el)) {
        return true;
      } else {
        hash[el] = 1;
      }
    }
    return false;[1,2,3,1]
  };document.write("Result : "+containsDuplicate([1,2,3,1]));