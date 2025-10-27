export default function QueryProcessor(query: string): string {
  const q = query.toLowerCase();

  // Shakespeare
  if (q.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  // Name
  if (q.includes("name")) {
    return "Rohan";
  }

  // Addition
  if (q.includes("plus")) {
    const numbers = q.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const result = parseInt(numbers[0]) + parseInt(numbers[1]);
      return `${numbers[0]} plus ${numbers[1]} is ${result}`;
    }
  }

  // Multiplication
  if (q.includes("multiplied by")) {
    const numbers = q.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const result = parseInt(numbers[0]) * parseInt(numbers[1]);
      return `${numbers[0]} multiplied by ${numbers[1]} is ${result}`;
    }
  }

  // Power (exponentiation)
  if (q.includes("to the power of")) {
    const numbers = q.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const base = parseInt(numbers[0]);
      const exponent = parseInt(numbers[1]);
      const result = Math.pow(base, exponent);
      return `${base} to the power of ${exponent} is ${result}`;
    }
  }

  // Largest number
  if (q.includes("largest")) {
    const numbers = q.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      const max = Math.max(...numbers.map(Number));
      return `The largest number is ${max}`;
    }
  }

  // Default
  return "I don’t know the answer to that yet.";
}
