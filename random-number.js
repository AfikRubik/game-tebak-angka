var randomNumber = Math.ceil(Math.random() * 10);
var result = null;

for (var i = 3; i > 0; i--) {
  var guessNumber = parseInt(prompt('Tebak angka 1 - 10'));
  if (guessNumber < randomNumber) {
    result = 'Tebakan kamu kurang besar';
  } else if (guessNumber > randomNumber) {
    result = 'Tebakan kamu kurang kecil';
  } else {
    result = 'Selamat! Tebakan kamu benar';
    i = 0;
  }

  if(i > 1) {
    alert(result + `. Kesempatan kamu tinggal ${i - 1} kali`)
  }
}

if(guessNumber === randomNumber) {
  alert(result);
} else {
  alert(result+ '. Kesempatan kamu habis');
}

console.log(randomNumber);