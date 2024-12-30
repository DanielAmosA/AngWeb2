// ID Validation Calculation
// Here’s the logic for calculating the validity of an ID (Teudat Zehut):

// Multiply each digit by 1 or 2:

// Alternate between multiplying each digit by 1 or 2, based on its position (starting from the first digit).
// Adjust for results greater than 9:

// If a multiplication result is greater than 9, subtract 9 from it.
// Sum all the adjusted results:

// Add together all the digits after adjustment.
// Add the check digit:

// Include the last digit (check digit) in the sum.
// Verify validity:

export const calculateIDChecksum = (id: string): number => {
  const digits = id.split('').map(Number);
  const weights = [1, 2, 1, 2, 1, 2, 1, 2];
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    let product = digits[i] * weights[i];
    if (product > 9) {
      product -= 9;
    }
    sum += product;
  }

  return sum + digits[8];
}

