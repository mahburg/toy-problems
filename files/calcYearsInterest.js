// Mr. Richman has a sum of money, 'P', that he wants to invest, and he wants to know how many years, 'Y', this sum needs to accrue interest, 'I' in order to  get to the desired amount, 'D'. Every year, the new sum is re-invested yearly after paying tax at a specific rate on the accrued interest.

// Write a function that tells Mr. Richman how many years he'll need to keep his money in the bank to get to the desired amount.
// function calculateYears(principal, interestRate, taxRate, desiredAmount){}

// For example:
// calculateYears(1000, 0.5, 0.18, 1100) ==> 3

// After 1yr, P = 1041.00
// After 2yr, P = 1083.86
// After 3yr, P = 1128.30

function calculateYears(principal, interest, tax, desired){
    let amt = principal;
    let years = 0;
    while(amt <= desired){
      amt = yeild(amt, interest, tax)
      years++
    }
    return years;
  }
  
  function yeild(principal, interest, tax){
      let gains = (interest * principal);
      let taxAmnt = gains * tax; 
    return  (gains - tax) + principal
  }
  
let x = calculateYears(1000, 0.5, 0.18, 2000)

x
