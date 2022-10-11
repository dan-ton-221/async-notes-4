/*Introducing workers:
A thread is a sequence of instructions that a program follows. Because the 
program consists of a single thread, it can only do one thing at a time: so 
if it is waiting for our long-running synchronous call to return, it can't do 
anything else.

There are three different sorts of workers:

-dedicated workers
-shared workers
-service workers

Using web workers:
function generatePrimes(quota) {

  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          return false;
       }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const primes = generatePrimes(quota);
  document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

Prime generation with a worker:
There are four files in this directory:

-index.html
-style.css
-main.js
-generate.js

Other types of workers:

There are other types of workers, though:

-Shared workers can be shared by several different scripts running in different windows.
-Service workers act like proxy servers, caching resources so that web applications can 
-work when the user is offline. They're a key component of Progressive Web Apps.