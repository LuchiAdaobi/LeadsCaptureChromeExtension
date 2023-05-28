// DOM ELEMENTS
const inputEl = document.getElementById("input-el");
const searchInput = document.getElementById("search-input");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const liBtns = document.querySelectorAll(".li-btn");
const ulEl = document.getElementById("ul-el");

let myLeads = [];
let filteredLeads = [];

// LOCAL STORAGE

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// RENDER ELEMENT TO DOM
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li> <a target = '_blank' href='${leads[i]}'> ${leads[i]} </a>
        <button class='li-btn'>x</button></li>`;
  }
  ulEl.innerHTML = listItems;
}

// DELETE ALL
deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// DELETE SINGLE LIST ELEMENT
ulEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("li-btn")) {
    const button = e.target;
    const listItem = button.parentElement;
    const index = Array.from(listItem.parentNode.children).indexOf(listItem);

    myLeads.splice(index, 1);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }
});

// SAVE TAB
tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (!tabs[0].url || myLeads.includes(tabs[0].url)) {
      return;
    }
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// ADD ELEMENT TO UI WHEN BTN IS CLICKED
saveBtn.addEventListener("click", () => {
  if (!inputEl.value || myLeads.includes(inputEl.value)) {
    return;
  }
  const newLead = inputEl.value;
  myLeads.push(newLead);
  filteredLeads.push(newLead);

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = "";
  render(myLeads);
});

// SEARCH FILTER
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  filteredLeads = myLeads.filter((lead) =>
    lead.toLowerCase().includes(searchTerm)
  );
  render(filteredLeads);
});

