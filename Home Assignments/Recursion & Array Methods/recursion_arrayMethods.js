const arr = ["Web Developer", "Refocus", "Web Developer", "Web Developer", "Refocus", "Awesome"];
const obj = Object.fromEntries(arr.map(item => {
    let count = 0;
    arr.forEach(element => { if (item === element){ count+=1; } });
    return [item , count];
}));
console.log(obj);



//I don't understand the problem in Task2
let InvoiceList = ["Invoice 008", "Invoice 007", "Invoice 006", "Invoice 005"];

function insertToBottom(){

}

function reverseList(){

}

InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");

console.log(InvoiceList.join(" "));
reverseList();
console.log(InvoiceList.join(" "));