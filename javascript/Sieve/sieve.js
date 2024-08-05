class Sieve {
  NthPrime(n) {
    if (n === 0) return 2;

    let count = 1;
    let num = 1;
    const primes = [2];

    while (count <= n) {
      num += 2;
      let isPrime = true;
      const sqrt = Math.sqrt(num);

      for (const prime of primes) {
        if (prime > sqrt) break;
        if (num % prime === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(num);
        count++;
      }
    }

    return primes[n];
  }
}

module.exports = Sieve;
