export default function QueryProcessor(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (q.includes("name")) {
    return "Noor";
  }

  if (q.includes("plus")) {
    const numbers = q.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const result = parseInt(numbers[0]) + parseInt(numbers[1]);
      return `${numbers[0]} plus ${numbers[1]} is ${result}`;
    }
  }

  if (q.includes("multiplied by")) {
    const numbers = q.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      const result = parseInt(numbers[0]) * parseInt(numbers[1]);
      return `${numbers[0]} multiplied by ${numbers[1]} is ${result}`;
    }
  }

  return "Noor";
}
