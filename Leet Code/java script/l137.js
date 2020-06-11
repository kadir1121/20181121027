const singleNumber = (nums)=> {    
    let result = 0;
    let x, sum;
    const n = nums.length   
    for (let i = 0; i < 32; i++) {      
      sum = 0;
      x = (1 << i);
      for (let j = 0; j < n; j++ ) {
          if (nums[j] & x) sum++;
      }      
      if (sum % 3) result |= x;
    }
    return result;
}; document.write("Result : "+singleNumber([2,2,3,2]));