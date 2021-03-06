
// input 태그의 value를 가져와서 포맷팅해주고 그대로 그 input 태그에 넣어주는 작업
function putCommaProcess(priceMonitor){
	let price = $(priceMonitor).val();
	console.log("일단 putCommaProcess에 들어옴 그리고 값은 : " + price);
	console.log(priceMonitor);
	let delPrice = deleteComma(price);
	console.log("delPrice : " + delPrice);
	let putPrice = putComma(delPrice);
	$(priceMonitor).val(putPrice);
}


// 콤마가 붙어있는 금액에서 콤마를 지워주는 작업. 
// string으로 return할 것이기 때문에 return 받아서 parseoInt를 해줘야한다.
let deleteComma = function(price){
	console.log("deleteComma price : " + price);
	if(!isEmpty(price)){
		let val = price.replace(/,/g, '');
		console.log("deleteComma : " + val);
		return val;
	};
};

// 콤마가 없는 금액에서 콤마를 붙여주는 작업을 한다.
//string으로 return할 것이기 때문에 return 받아서 parseoInt를 해줘야한다.
let putComma = function(price){
	if(!isEmpty(price) && isNumeric(price)){
		let val = currencyFormatter(price);
		return val;
	};
}


//비어잇냐 아니냐만 판단해주는 것. 볼 필요 없음
function isEmpty(value){
    if(value.length == 0 || value == ""){
        return true;
    }else {
        return false;
    }
}

// 숫자냐 아니냐(음수 포함) 판단해주는것. 볼 필요 없음
function isNumeric(value){
    var regExp = /^[-]{0,1}[0-9]+$/g;
    return regExp.test(value);
}

// 포맷팅 해서 3자리 수마다 콤마 붙여주는 작업. putComma에서 부르기때문에 볼 필요 없음
function currencyFormatter(amount){
	console.log("amount type : " + typeof(amount));
	let curr = "";
	if(amount == 0 || amount == "0"){
		curr = "0";
	}else{
		curr = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
    return curr;
}
