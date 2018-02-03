
var foodDatabase = [
    {name: 'Nasi Putih', servingSize: '1 cup', calories: 205},
    {name: 'Nasi Goreng', servingSize: '1 cup', calories: 346},
    {name: 'Indomie Goreng', servingSize: '1 packet', calories: 220},
    {name: 'Mie Ayam', servingSize: '1 cup', calories: 421},
    {name: 'Soto Ayam', servingSize: '1 cup', calories: 312},
    {name: 'Coca-Cola', servingSize: '1 can (12oz)', calories: 140},
    {name: 'Kentang Goreng small (McD)', servingSize: '1 serving (75g)', calories: 230},
    {name: 'Kentang Goreng medium (McD)', servingSize: '1 serving (111g)', calories: 340},
    {name: 'Kentang Gorenglarge (McD)', servingSize: '1 serving (5.9oz)', calories: 510},
    {name: 'Big Mac (McD)', servingSize: '1 burger (211g)', calories: 540},
    {name: 'Ayam Goreng Dada (KFC)', servingSize: '1 piece', calories: 320},
    {name: 'Ayam Goreng Paha Atas (KFC)', servingSize: '1 piece', calories: 370},
    {name: 'Whopper (Burger King)', servingSize: '1 burger (260g)', calories: 630},
    {name: 'Double Cheeseburger (Burger King)', servingSize: '1 burger (204g)', calories: 350},
    {name: 'Whopper Jr. (Burger King)', servingSize: '1 burger (134)', calories: 310},  
];

var body = document.body;
var btnSearch = document.getElementById('btnSearch');
var listSearchItem = document.getElementById('listSearchItem');
var txtSearch = document.getElementById('txtSearch');
var result = document.getElementById('result');
var selectedFood = document.getElementById('selectedFood');
var totalCal = 0;

btnSearch.addEventListener('click', function(){
    var searchValue = txtSearch.value;
    var expression = new RegExp(searchValue, 'gi');
    if(searchValue.length !== 0){
        if(result.children.length === 0){
            for(var i=0; i<foodDatabase.length; i++){
                if(foodDatabase[i].name.match(expression)){
                    var list = document.createElement('li');
                    list.textContent = foodDatabase[i].name;
                    list.value = i;
                    result.append(list);
                }
            }
        }else{
            for(var j=0; j<result.children.length; j++){
                if(!result.children[j].textContent.match(expression)){
                    var list = document.createElement('li');
                    list.textContent = foodDatabase[i].name;
                    list.value = i;
                    result.append(list);
                }
            }
        }
    }
});

var ul = document.getElementById('result');
txtSearch.onclick = function(){
    ul.innerHTML = '';
}

var p = document.createElement('p');

ul.onclick = function(){
    var target = event.target;
    ul.innerHTML = '';
    txtSearch.value = '';
    var list = document.createElement('li');
    list.textContent = foodDatabase[target.value].name +'\nKalori: '+foodDatabase[target.value].calories+'';
    list.innerHTML = list.innerHTML.replace(/\n/g, '<br />');
    totalCal += foodDatabase[target.value].calories;
    selectedFood.append(list);
    p.textContent = 'Total kalori yang kamu konsumsi hari ini : '+ totalCal +' Kalori';
    body.append(p);
}



