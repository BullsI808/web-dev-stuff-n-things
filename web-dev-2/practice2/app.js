function truncateString(str, num) {
    var sliced = str.slice(0, (num - 3));
    return sliced + "...";
  }
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));