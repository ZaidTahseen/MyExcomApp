const sareeList = [
  { sareeName: "Pattu Saree", sareeColor: "green" , sareePrice : 500 },
  { sareeName: "Banarsi Saree", sareeColor: "red", sareePrice : 600 },
];

const sareeSection = document.getElementsByClassName("sareeListSection")[0];

sareeList.forEach((saree) => {
  let newElement = document.createElement("div"); // create new div
  newElement.className = "saree"; // assign class
  newElement.textContent = saree.sareeName + "---- price -> " + saree.sareePrice; // add text
  newElement.style.backgroundColor = saree.sareeColor
  newElement.style.margin = "5px"
  newElement.style.padding = "5px"
  sareeSection.appendChild(newElement);
});



function addSaree() {
    console.log( "form called")
  let newElement = document.createElement("div"); // create new div
  newElement.className = "saree"; // assign class
  newElement.textContent = "Saree"; // add text
  newElement.style.backgroundColor = "blue"
  newElement.style.margin = "5px"
  sareeSection.appendChild(newElement);
}
