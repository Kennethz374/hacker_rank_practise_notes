
// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING
const makeCase = function(input, typeOfCase) {
  let camel = [];
  if (typeOfCase === "camel") {
    let arr = input.split(" ");
    camel.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      let up = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
      camel.push(up);
    }
    return camel.join("");
  }
};

makeCase("this is a string", "camel");