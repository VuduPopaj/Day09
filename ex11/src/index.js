function switchCase(letter) {
  // Write code below this line
  var animals;
  switch (letter) {
    case "a":
      animals = "antelope";
      break;
    case "b":
      animals = "bird";
      break;
    case "c":
      animals = "cat";
      break;
    default:
      4;
      animals = "stuff";
      break;
  }
  // Write code above this line
  return animals;
}

console.log(switchCase("a")); // Change this line
module.exports = switchCase;
