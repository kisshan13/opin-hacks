export function convertToCamelCase(inputString) {
  // Convert to lowercase and split by spaces
  const words = inputString.toLowerCase().split(" ");

  // Capitalize the first letter of each word (except the first one)
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  // Join the words together without spaces
  return words.join("");
}
