const number = 24

// n に入っている値を 1 から、 number まで、 1 ずつ増やしながら、 {} の中身を繰り返す
for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!!!")
  } else {
    console.log(n)
  }
}

// 引数 number を受け取る関数
const genkiFunction = function(number) {
    // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
    for (let n = 1; n <= number; n++) {
      if (n % 3 === 0) {
        console.log(`${n}!!!!!!!`)
      } else {
        console.log(n)
      }
    }
  }
  genkiFunction(24)
  genkiFunction(100)

  function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
  }
  fizzbuzz(30);  