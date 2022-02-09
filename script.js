//1.all eements

let input = document.querySelector("#list");
let addItem = document.querySelector("#btn1");
let main = document.querySelector("main");



//2.functions

addItem.addEventListener("click",()=>{
  console.log(input.value);

  //appending
  let create = document.createElement("div");
  create.classList.add("list-items");
  main.appendChild(create);
  let para = document.createElement("p");
  create.appendChild(para);
  let donebtn = document.createElement("button");
  donebtn.id="donebtn";
  donebtn.innerText="done";
  //donebtn.classList.add("donebtn");
  create.appendChild(donebtn);
  let deleteBtn = document.createElement("button");
  deleteBtn.id="deletebtn";
  deleteBtn.classList.add("deletebtn");
  deleteBtn.innerText="delete";
  create.appendChild(deleteBtn);
  
  para.innerText =  input.value;
  input.value = " ";
  deleteBtn.addEventListener("click",()=>{
    main.removeChild(create)
    
  })

  donebtn.addEventListener("click",()=>{
    para.classList.add("donebtn");
  })
  












})