function validateForm() {
  let x = document.forms["myform"]["name"].value;
  for (let i = 0; i < x.length; i++) {
    let char = x[i];
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) continue;
    else alert("Name must be filled out");
  }
}
