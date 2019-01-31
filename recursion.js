function recursiveSum(x) {
    if (x === 0) return 0;
    return x + recursiveSum(x - 1);
  }

  recursiveSum(5);