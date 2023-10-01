function generateRandomPort() {
  const minPort = 1024;
  const maxPort = 65535;

  // Generate a random decimal number between 0 and 1
  const randomDecimal = Math.random();

  // Scale the random number to the range of ports and convert it to an integer
  const randomPort =
    Math.floor(randomDecimal * (maxPort - minPort + 1)) + minPort;

  return randomPort;
}

export default generateRandomPort;
