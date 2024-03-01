let pass = document.querySelector("#result");
let btn = document.querySelector(".btn-big");

const getRandomLow = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 96);
};

const getRandomUp = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNum = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSym = () => {
  const symbols = "!@#$%^&*()=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const kl = () => {
  const func = [getRandomLow(), getRandomNum(), getRandomSym(), getRandomUp()];
  return func[Math.floor(Math.random() * func.length)];
};

btn.addEventListener("click", () => {
  const res = kl() + kl() + kl() + kl() + kl() + kl() + kl() + kl();
  pass.innerText = res;
});
