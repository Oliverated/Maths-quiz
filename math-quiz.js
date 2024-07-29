let main_block = document.querySelector("main");
let numb1 = document.querySelector(".numb1");
let numb2 = document.querySelector(".numb2");
let block2 = document.querySelector(".que-block");
let block1 = document.querySelector(".intro-block");
let continueBtn = document.querySelector(".continue");
let name_inp = document.querySelector(".name-inp");
let name_value = document.querySelector(".name");
let notice = document.querySelector(".notice");
let ansBtn = document.querySelector(".answer");
let ans_inp = document.querySelector(".ans-inp");
let ans_note = document.querySelector(".ans-note");
let operator_sign = document.querySelector(".operator");
let atp_note = document.querySelector(".attemps");
let checkBtn = document.querySelector(".check");
let genBtn = document.querySelector(".generate");
let attempts = 0;
let attempts2 = 0;
let answer;

// random number generation
function gen_ran_func() {
  let ran1 = Math.floor(Math.random() * 10);
  let ran2 = Math.floor(Math.random() * 10);
  let ran_operator = Math.floor(Math.random() * 4);

  numb1.innerHTML = ran1;
  numb2.innerHTML = ran2;

  function random_operator() {
    if (ran_operator === 0) {
      answer = ran1 + ran2;
      operator_sign.innerHTML = "+";
    } else if (ran_operator === 1) {
      answer = ran1 - ran2;
      operator_sign.innerHTML = "-";
    } else if (ran_operator === 2) {
      answer = ran1 / ran2;
      operator_sign.innerHTML = "/";
    } else if (ran_operator === 3) {
      answer = ran1 * ran2;
      operator_sign.innerHTML = "x";
    }
  }
  random_operator();
}

genBtn.addEventListener("click", () => {
  gen_ran_func();
});

// name input validation
continueBtn.addEventListener("click", () => {
  if (name_inp.value == "") {
    notice.innerHTML = " enter your name";
  } else {
    block2.style.display = "block";
    block1.style.display = "none";
    name_value.textContent = name_inp.value;
  }
  gen_ran_func();
});

// answer input validation
ansBtn.addEventListener("click", () => {
  try {
    if (ans_inp.value == "") {
      ans_note.innerHTML = "Empty Input";
      ans_note.style.color = "yellow";
      main_block.style.borderLeft = "5px solid yellow";
    } else if (isNaN(ans_inp.value)) {
      ans_note.innerHTML = "numbers only";
      ans_note.style.color = "darkyellow";
      main_block.style.borderLeft = "5px solid yellow";
    } else if (ans_inp.value == answer) {
      ans_note.innerHTML = name_inp.value + " you won! it Correct!!!";
      ans_note.style.color = "green";
      main_block.style.borderLeft = "5px solid green";
      atp_note.innerHTML = name_inp.value + " You made " + attempts + " attemps";
      attempts = 0;
      ansBtn.textContent = "Continue";
      ans_inp.value.textContent = "you won " + name_inp.value;
      if (ans_inp.disabled == true) {
        ansBtn.textContent = "Answer";
        ans_inp.disabled = false;
        gen_ran_func();
      } else {
        ans_inp.disabled = true;
      }
    } else if (ans_inp.value != answer) {
      ans_note.innerHTML = name_inp.value + " wrong answer! try again!!";
      ans_note.style.color = "red";
      main_block.style.borderLeft = "5px solid red";
      attempts++;
      attempts2++;
      atp_note.innerHTML = "";
      ans_inp.disabled = false;
      if (attempts2 === 3) {
        ans_note.innerHTML = "are you sure you want to continue?";
      } else if (attempts2 === 5) {
        ans_note.innerHTML = "if wrong it generate a new number";
      } else if (attempts2 === 6) {
        gen_ran_func();
        attempts2 = 0;
      }
    }
  } catch (error) {
    ans_note.textContent = "unespected error!";
    ans_note.style.color = "red";
  }
});
