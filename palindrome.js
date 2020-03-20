const isCasiPalindromo = str => {
  str = str.split('');
  let casiCount = 0;
  for (i = 0; i < Math.floor(str.length / 2); i++) {
    console.log(str[i]);
    console.log(str[str.length - i - 1]);
    if (str[i] != str[str.length - 1 - i]) {
      casiCount++;
    }
    if (casiCount > 1) {
      return false;
    }
  }
  return true;
};
