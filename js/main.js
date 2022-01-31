let names = [
  "Aciel",
  "Aria",
  "Ann",

  "Betty",
  "Bell",
  "Brown",

  "Cindy",
  "Christine",
  "Cruella",

  "Don",
  "Daniel",
  "Donald",

  "Eleeseean",
  "Ellie",
  "Eco",
  "Eden",

  "Fanko",
  "Felix",
  "Finn",

  "Ginger",
  "Grace",
  "Green",

  "Hellen",
  "Hailey",
  "Heidi",

  "Izac",
  "Isabel",
  "Itzel",

  "Jake",
  "Jane",
  "Jhon",

  "Kate",
  "Katherine",
  "Kaithyn",

  "Leo",
  "Lisa",
  "Lindsey",

  "Moth",
  "Montana",
  "Molly",

  "November",
  "Nannai",
  "Nessa",

  "Oakley",
  "Olivia",
  "Odette",

  "Parker",
  "Patrick",
  "Percy",

  "Quincy",
  "Quade",

  "Ryan",
  "Randolph",
  "Roman",

  "Stella",
  "Silbia",
  "Spring",

  "Tom",
  "Tania",
  "Troy",
  "Tonya",

  "Sean",
  "Henry",
  "Brad",
  "Stephen",
  "Taylor",
  "Timmy",
  "Cathy",
  "John",
  "Amanda",
  "Amara",
  "Sam",
  "Sandy",
  "Danny",
  "Ellen",
  "Camille",
  "Chloe",
  "Emily",
  "Nadia",
  "Mitchell",
  "Harvey",
  "Lucy",
  "Amy",
  "Glen",
  "Peter",
];


let sortedNames = names.sort();

let input = document.getElementById("input");

input.addEventListener("keyup", (e) => {
  
  removeElements();
  for (let i of sortedNames) {
    
    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      
      let listItem = document.createElement("li");
      
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");

      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);

      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});

function displayNames(value) {
  input.value = value;
  removeElements();
}

function removeElements() {

  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}