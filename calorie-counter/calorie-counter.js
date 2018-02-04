
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
var ul = document.getElementById('result');
//var p = document.getElementsByClassName('total-calorie-report');

var totalCal = 0;
var list = document.createElement('li');

btnSearch.addEventListener('click', function(){
    var searchValue = txtSearch.value.trim();
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
        }
    }
});


txtSearch.onclick = function(){
    result.innerHTML = '';
}

result.onclick = function(){
    var target = event.target;
    result.innerHTML = '';
    txtSearch.value = '';
    var list = document.createElement('li');
    list.setAttribute('class', 'selected-food-list');
    list.setAttribute('id', target.value);
    
    var foodName = document.createElement('p');
    foodName.setAttribute('class', 'food-name')
    var servingSize = document.createElement('p');
    servingSize.setAttribute('class', 'serving-size');
    var btnDeleteItem = document.createElement('button');
    btnDeleteItem.setAttribute('class', 'delete-item');
    btnDeleteItem.setAttribute('value', target.value);
    var calorie = document.createElement('p');
    calorie.setAttribute('class', 'calorie');
    
    var txtFood = document.createTextNode(foodDatabase[target.value].name);
    foodName.appendChild(txtFood);
    var txtServingSize = document.createTextNode(foodDatabase[target.value].servingSize);
    servingSize.appendChild(txtServingSize);
    var txtCalorie = document.createTextNode(foodDatabase[target.value].calories + ' kalori');
    calorie.appendChild(txtCalorie);
    btnDeleteItem.appendChild(document.createTextNode('Delete'));

    btnDeleteItem.addEventListener('click', function(){
        var item = document.getElementById(target.value);
        item.parentNode.removeChild(item);
        calculateCalories(target.value, 'min');
    });

    list.append(foodName);
    list.append(servingSize);
    list.append(btnDeleteItem);
    list.append(calorie);
    selectedFood.append(list);
    calculateCalories(target.value, 'plus');
}

// p.setAttribute('class', 'total-calories-report')
// p.textContent = totalCal +' Kalori';

function calculateCalories(index, type){
    if(type === 'plus'){
        totalCal += foodDatabase[index].calories;
    }else if(type === 'min'){
        totalCal -= foodDatabase[index].calories;
    }
    document.getElementById('calculateResult').innerHTML = totalCal +' Kalori';
    // modify.textContent = totalCal +' Kalori';
    // body.append(p);
}