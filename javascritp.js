window.addEventListener("DOMContentLoaded",history) ; 

function history(){
    axios.get("https://crudcrud.com/api/8f1c2820b05f401cb2f13fd26544c60b/saving")
    .then((res)=>{
        const array = res.data ;

        for (let i = 0 ; i < array.length ; i ++){
            show(array[i])
        }

    })
    .catch((err)=>{
        console.log("it's errors");
    })
}


const add = document.getElementById("add") ; 

add.addEventListener("click" , save_user) ; 

let price ;
let foods_name ; 
let table ;

function  save_user (){

    price = document.getElementById("choose_price").value ; 
    foods_name  = document.getElementById("dish").value ; 
    table = document.getElementById("table").value ; 

    const data = {
        foods_price : price , 
        foods_order_names : foods_name , 
        table_number : table
    }

    axios.post("https://crudcrud.com/api/8f1c2820b05f401cb2f13fd26544c60b/saving",data)
    .then((res) =>{
        show(res.data)
    })
    .catch((err)=>{
        console.log("it's errors");
    })
}


function show(obj) {

    console.log(obj);
    let cre_new_list = document.createElement("li");
    cre_new_list.innerHTML = `<li id=${obj._id}>${obj.foods_order_names}-- ${obj.foods_price}--<button onclick="userdelete('${obj._id}')">DEL</button></li>`;


    let select_table = obj.table_number;

    if (select_table === "table1") {  
        document.getElementById("t-1").appendChild(cre_new_list);
    } else if (select_table === "table2") {  
        document.getElementById("t-2").appendChild(cre_new_list);
    } else if (select_table === "table-3") {  
        document.getElementById("t-3").appendChild(cre_new_list);
    }
}

function userdelete(user_id){

    axios.delete(`https://crudcrud.com/api/8f1c2820b05f401cb2f13fd26544c60b/saving/${user_id}`).then((res) =>{
        document.getElementById(user_id).remove();
    }).catch((err)=>{
        console.log("it's errors " ,err);
    })
}