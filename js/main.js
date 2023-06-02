// var users=[
//     {name:"ahmed",age:30,email:'ahmed@gmail.com'},
//     {name:"ali",age:30,email:'ali@gmail.com'},
//     {name:"sara",age:30,email:'sara@gmail.com'},
//     {name:"Boba",age:30,email:'Boba@gmail.com'},
//     {name:"Khaled",age:30,email:'Khaled@gmail.com'},
//     {name:"sola",age:30,email:'sola@gmail.com'},
//     {name:"bola",age:30,email:'bola@gmail.com'},
//     {name:"mona",age:30,email:'mona@gmail.com'},
//     {name:"zozo",age:30,email:'zozo@gmail.com'},
// ]
// var cartona=``
// for(var i=0;i<users.length;i++){
//     cartona+=`
//     <tr>
//         <td>${users[i].name}</td>
//         <td>${users[i].age}</td>
//         <td>${users[i].email}</td>
//     </tr>
//     `
// }
// document.getElementById('Emoo').innerHTML=cartona




var ProductNameInput = document.getElementById('ProductName')
var ProductCategoryInput = document.getElementById('ProductCategory')
var ProductPriceInput = document.getElementById('ProductPrice')
var ProductDescriptionInput = document.getElementById('ProductDescription')

var productcontainer=[]

if (localStorage.getItem('products')!=null) {
    productcontainer=JSON.parse(localStorage.getItem('products'))
    
}

function addproduct(){
    var productObj={
        name: ProductNameInput.value,
        category: ProductCategoryInput.value,
        price: ProductPriceInput.value,
        description: ProductDescriptionInput.value
    }
    productcontainer.push(productObj)

    localStorage.setItem('products',JSON.stringify(productcontainer))
    displayProduct() 
    clear() 
}

function displayProduct() {
    var cartona=``
for(var i=0;i<productcontainer.length;i++){
    cartona+=`
    <tr>
        <td>${i}</td>
        <td>${productcontainer[i].name}</td>
        <td>${productcontainer[i].category}</td>
        <td>${productcontainer[i].price}</td>
        <td>${productcontainer[i].description}</td>
        <td><button onclick="DeleteProduct(${i})" class="btn btn-sm btn-danger">Delete</button></td>
        <td><button class="btn btn-sm btn-Success">Update</button></td>
    </tr>
    `
}
document.getElementById('Emoo').innerHTML=cartona
    
}
displayProduct()
function clear() {
    ProductNameInput.value="";
    ProductCategoryInput.value="";
    ProductPriceInput.value="";
    ProductDescriptionInput.value="";
    
}


function DeleteProduct(Index) {
    productcontainer.splice(Index,1)
    localStorage.setItem('products',JSON.stringify(productcontainer))
    displayProduct()
}

function search() {
    
    var searchInput=document.getElementById('searchInput').value
    var box2=``
    for (var i = 0; i < productcontainer.length; i++) {
        if (productcontainer[i].ProductName.tolowerCase().includes(searchInput.tolowerCase())) {
            box2+=`
            <tr>
            <td>${i}</td>
            <td>${productcontainer[i].name}</td>
            <td>${productcontainer[i].category}</td>
            <td>${productcontainer[i].price}</td>
            <td>${productcontainer[i].description}</td>
            <td><button onclick="DeleteProduct(${i})" class="btn btn-sm btn-danger">Delete</button></td>
            <td><button class="btn btn-sm btn-Success">Update</button></td>
        </tr>
        `

        }
        
    }
    document.getElementById('Emoo').innerHTML=box2
}












