let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let str = "";

function addToDisplay(val, type) {
  switch(type) {
    case "number":
    case "decimal": {
      str += val;
      break;
    }
    case "clear": {
      str = "";
      break;
    }
    case "operator": {
      let last = str[str.length - 1];
      if (["/", "+", "-", "x"].includes(last)) {
        let newStr = str.split("");
        newStr[newStr.length - 1] = val;
        str = newStr.join("");
      } else {
        str += val;
      }
      break;
    }
    case "backspace": {
      str = str.slice(0, -1);
      break;
    }
    case "equals": {
      let strArr = str.split("").map((val) => (val == "x" ? "*" : val));
      str = eval(strArr.join(""));
      break;
    }
    default:
      alert("Invalid Expression");
  }
  display.value = str;
}

buttons.forEach((el, id) => {
  el.addEventListener("click", () => {
    addToDisplay(el.innerText, el.classList["0"]);
  });
});

