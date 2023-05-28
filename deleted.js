// AUTOCOMPLETE FUNCTIONALITY
// inputEl.addEventListener("input", () => {
//   const searchTerm = inputEl.value.toLowerCase();
//   const autocompleteResult = myLeads.find((lead) =>
//     lead.toLowerCase().startsWith(searchTerm)
//   );

//   if (autocompleteResult) {
//     inputEl.value = autocompleteResult;
//      inputEl.selectionStart = searchTerm.length;
//      inputEl.selectionEnd = autocompleteResult.length;
//   }
// });

// // DELETE AUTOCOMPLETED VALUE
// inputEl.addEventListener("keydown", (event) => {
//   if (event.key === "Backspace" && inputEl.selectionStart > 0 && inputEl.selectionEnd === inputEl.value.length) {
//     inputEl.value = "";
//   }
// });


// MANIFEST
// {
//     "manifest_version" : 3,
//     "version" : "1.0",
//     "name" : "Leads tracker",
//     "action" : {
//         "default_popup" : "index.html",
//         "default_icon" : "dollar-icon.png"
//     },
//     "permissions" : [
//         "tabs"
//     ]
// }


// PRACTICE
const array = ["China", "India"];
function generateSentence(desc, array) {
  let countries = "";
  for (let i = 0; i < array.length; i++) {
    countries += array[i];
    if(i !== array.length - 1){
        countries += ', '
    }
  }
  return `The ${array.length} ${desc}: ${countries}`
}

const sentence = generateSentence("largest countries", array);

console.log(sentence);

// function renderImg(){
//     for(let i = 0; i < imgs.length; i++){
//         imgEl.innerHTML += `&{imgs[i]}`
//     }
// }
// renderImg()