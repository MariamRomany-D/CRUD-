var ProductName = document.getElementById("ProductName");
var ProductPrice = document.getElementById("ProductPrice");
var ProductCategory = document.getElementById("ProductCategory");
var ProductDescribtion = document.getElementById("ProductDescribtion");
var searchOfProducts = document.getElementById("search");

var allProducts = []
if(localStorage.getItem("Products")==null)    //عشان اخد الستورج و اعرضها في الصفحه
{
    allProducts = []  
}else
{
    allProducts = JSON.parse( localStorage.getItem("Products")) // لبحولها من سترنج لارراي
    displayProduct(allProducts);
}
// /////////////////////////////////////////(ADD PRODUCT)/////////////////////////////////////////////
var index ;
function addProduct()
{  
  var btn= document.getElementById("btn").innerHTML 

   if(btn=='Update') // لما بدوس على 
                    // update بعد ما اتحولت ل dlete
   {
      allProducts[index].Name = ProductName.value ;
      allProducts[index].Price = ProductPrice.value ;
      allProducts[index].Category = ProductCategory.value ;
      allProducts[index].Describtion = ProductDescribtion.value ;
      displayProduct(allProducts);
   }
   else
   {
    var Products =
    {   Name:ProductName.value ,
        Price:ProductPrice.value , 
        Category:ProductCategory.value ,
        Describtion:ProductDescribtion.value 
    }


   allProducts.push(Products);
   console.log(allProducts);
   }
   
   clearProduct()
   localStorage.setItem("Products",JSON.stringify(allProducts)) //بحط الارراي بتاعي في اللوكال ستورج  , بحولها من ارراي لسترنج 
   displayProduct(allProducts);
   document.getElementById('btn').innerHTML = "Add Product" ;

}

// /////////////////////////////////////////(DISPLAY PRODUCT)/////////////////////////////////////////////

function displayProduct(productArray_Or_newArray)
{
    // var cup=``
    // for(var i=0 ; i<allProducts.length ; i++)
    // {
    //     cup+=` <tr>
    //     <td>`+(i+1)+`</td>
    //     <td>`+allProducts[i].Name+`</td>
    //     <td>`+allProducts[i].Price+`</td>
    //     <td>`+allProducts[i].Category+`</td>
    //     <td><button onclick="update(`+i+`)" class="btn btn-outline-primary">Update</button></td>
    //     <td><button  onclick="deletProduct(`+i+`)" class="btn btn-outline-danger">Dlete</button></td>
    // </tr>`
    

    var cup=``
    for(var i=0 ; i<productArray_Or_newArray.length ; i++)
    {
        cup+=` <tr>
        <td>`+(i+1)+`</td>
        <td>`+productArray_Or_newArray[i].Name+`</td>
        <td>`+productArray_Or_newArray[i].Price+`</td>
        <td>`+productArray_Or_newArray[i].Category+`</td>
        <td><button onclick="update(`+i+`)" class="btn btn-outline-primary">Update</button></td>
        <td><button  onclick="deletProduct(`+i+`)" class="btn btn-outline-danger">Dlete</button></td>
    </tr>`
    }

 document.getElementById("demo").innerHTML = cup ;   
}

// /////////////////////////////////////////(CLEAR PRODUCT)/////////////////////////////////////////////

function clearProduct()
{
    ProductName.value=" "  
    ProductPrice.value=" "  
    ProductCategory.value=" " 
    ProductDescribtion.value=" "   
}

// /////////////////////////////////////////(DELETE PRODUCT)/////////////////////////////////////////////

function deletProduct(index)
{
allProducts.splice(index,1);
localStorage.setItem("Products",JSON.stringify(allProducts));
displayProduct(allProducts);
}

// /////////////////////////////////////////(UPDATE PRODUCT)/////////////////////////////////////////////

function update(i)  // لما بدوس على update 
{
    index = i ;
ProductName.value = allProducts[i].Name;
ProductPrice.value = allProducts[i].Price;
ProductCategory.value = allProducts[i].Category;
ProductDescribtion.value = allProducts[i].Describtion;
 
document.getElementById('btn').innerHTML = "Update" ;
}

// /////////////////////////////////////////(SEARCH PRODUCT)/////////////////////////////////////////////

let btn = document.getElementById("onbtn")
btn.addEventListener("click",function()
{ var newArray=[]
    for(var i=0 ; i<allProducts.length ; i++)
    {
        if(allProducts[i].Name.toLowerCase().includes(searchOfProducts.value.toLowerCase())  || allProducts[i].Category.toLowerCase().includes(searchOfProducts.value.toLowerCase()) )
        {  newArray.push(allProducts[i])
            
        }
        // else
        // {
        //     console.log("NOT FOUND! pleas try again");
        // }
      
    }
    displayProduct(newArray);
    
})

