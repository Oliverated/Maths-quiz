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

let add = ''
let sub = ""
let mul =""
let div =""

// random number generation
function gen_ran_func() {
  let ran1 = Math.floor(Math.random() * 10);
  let ran2 = Math.floor(Math.random() * 10);
  let ran_operator = Math.floor(Math.random() * 4);

  console.log(ran_operator);

  numb1.innerHTML = ran1;
  numb2.innerHTML = ran2;

  if (ran_operator === 0) {
    add = ran1 + ran2;
    operator_sign.innerHTML = "+";
  } else if (ran_operator === 1) {
    sub = ran1 - ran2;
    operator_sign.innerHTML = "-";
  } else if (ran_operator === 2) {
    div = ran1 / ran2;
    operator_sign.innerHTML = "/";
  } else if (ran_operator === 3) {
    mul = ran1 * ran2;
    operator_sign.innerHTML = "x";
  }
console.log(add)
  console.log(operator_sign);
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
  // try {
    if (ans_inp.value == "") {
      ans_note.innerHTML = "Empty Input";
      ans_note.style.color = "yellow";
    } else if (ans_inp.value == add  ) {
      ans_note.innerHTML = "Correct!!!";
      ans_note.style.color = "green";
      main_block.style.borderLeft = "5px solid green";
      console.log(attempts);
      atp_note.innerHTML = "You made " + attempts + " attemps";
      attempts = 0;
      // block2.style.background = 'orange'
    } else if (ans_inp.value ==  sub  ) {
      ans_note.innerHTML = "Correct!!!";
      ans_note.style.color = "green";
      main_block.style.borderLeft = "5px solid green";
      console.log(attempts);
      atp_note.innerHTML = "You made " + attempts + " attemps";
      attempts = 0;
      // block2.style.background = 'orange'
    } else if (ans_inp.value ==  mul  ) {
      ans_note.innerHTML = "Correct!!!";
      ans_note.style.color = "green";
      main_block.style.borderLeft = "5px solid green";
      console.log(attempts);
      atp_note.innerHTML = "You made " + attempts + " attemps";
      attempts = 0;
      // block2.style.background = 'orange'
    }  else if (ans_inp.value == div ) {
      ans_note.innerHTML = "Correct!!!";
      ans_note.style.color = "green";
      main_block.style.borderLeft = "5px solid green";
      console.log(attempts);
      atp_note.innerHTML = "You made " + attempts + " attemps";
      attempts = 0;
      // block2.style.background = 'orange'
    }
     else if (isNaN(ans_inp.value)) {
      ans_note.innerHTML = "numbers only";
      ans_note.style.color = "yellow";
    } else if (ans_inp.value != add ) {
      ans_note.innerHTML = "wrong answer! try again!!";
      ans_note.style.color = "red";
      attempts++;
      console.log(attempts);
      function atp_func() {
        if (attempts === 3) {
          ans_note.innerHTML = "are you sure you want to continue?";
        } else if (attempts === 5) {
          ans_note.innerHTML = "enter generate to a different number";
        } else if (attempts === 6) {
          gen_ran_func();
        }
      }

      atp_func();
    }
// gen_ran_func()
  // }
  //  catch (error) {
  //   ans_note.textContent = "unespected error!";
  //   ans_note.style.color = "red";
  // }
});



if (typeof(add) == 'string'){
console.log('good')
}


let b = 2 + 4 

console.log(b)