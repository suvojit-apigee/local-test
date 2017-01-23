 var acctNumBalance1 = {
    accntNum : "4441244566782134",
    balance : 50000
};

var acctNumBalance2 = {
    accntNum : "4441244566782135",
    balance : 100000
};

var acctNumBalance3 = {
    accntNum : "4441244566782136",
    balance : 30000
};

var acctNumBalance4 = {
    accntNum : "4441244566782137",
    balance : 150000
};

var acctNumBalance5 = {
	    accntNum : "4671345612345555",
	    balance : 150000
};

var accNum = null;
var b1 = false;
var b2 = false;

var now = new Date();
var Weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var Month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

var currentTime = new Date();
var currentOffset = currentTime.getTimezoneOffset();
var ISTOffset = 330; 
var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
var hoursIST = ISTTime.getHours();
var minutesIST = ISTTime.getMinutes();
var secsIST = ISTTime.getSeconds();

if((typeof context.getVariable("param1")=== 'undefined') || (context.getVariable("param1")===null) || (context.getVariable("param1")==='')){
     print("inside check path parameter if block");
     print ("value of path paramerter == "+context.getVariable("param1"));
      var g = {
        'status_code': 204,
		'message' : "Cardnumber not found in the URI path, please provide valid cardnumber in the path..",
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
	    var passed2 = JSON.stringify(g);
	    context.setVariable("response.header.x-target-response-code", 204);
        context.setVariable("response.content",passed2);
 }else{
  accNum = context.getVariable("param1");
  b1 = true;


if(accNum===acctNumBalance1.accntNum||accNum===acctNumBalance2.accntNum||accNum===acctNumBalance3.accntNum||accNum===acctNumBalance4.accntNum||accNum===acctNumBalance5.accntNum){
b2 = true;
}

if(b1===true && b2===true){
    if(accNum===acctNumBalance1.accntNum){
        var e1 = {
        'status_code': 200,
		'card_number' : accNum,
		'balance_present' : acctNumBalance1.balance,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var passed1 = JSON.stringify(e1);
        context.setVariable("response.header.x-target-response-code", 200);
        context.setVariable("response.content",passed1);
    }
}if(accNum===acctNumBalance2.accntNum){
         var e2 = {
        'status_code': 200,
		'card_number' : accNum,
		'balance_present' : acctNumBalance2.balance,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var passed2 = JSON.stringify(e2);
        context.setVariable("response.header.x-target-response-code", 200);
        context.setVariable("response.content",passed2);
    }
}if(accNum===acctNumBalance3.accntNum){
         var e3 = {
        'status_code': 200,
		'card_number' : accNum,
		'balance_present' : acctNumBalance3.balance,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var passed3 = JSON.stringify(e3);
        context.setVariable("response.header.x-target-response-code", 200);
        context.setVariable("response.content",passed3);
    }
}if(accNum===acctNumBalance4.accntNum){
         var e4 = {
        'status_code': 200,
		'card_number' : accNum,
		'balance_present' : acctNumBalance4.balance,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var passed5 = JSON.stringify(e5);
        context.setVariable("response.header.x-target-response-code", 200);
        context.setVariable("response.content",passed4);
    }
  }
if(accNum===acctNumBalance5.accntNum){
    var e5 = {
   'status_code': 200,
	'card_number' : accNum,
	'balance_present' : acctNumBalance4.balance,
   'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
};
   var condition_status = context.getVariable("condition.status");
   if(condition_status !==null || condition_status!==''){
   var passed4 = JSON.stringify(e4);
   context.setVariable("response.header.x-target-response-code", 200);
   context.setVariable("response.content",passed5);
}
}
}else{
        /*var err = {
        'status_code': 204,
		'message' : "The Card number is invalid.. Please provide a valid card number to get the balance",
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var errPassed = JSON.stringify(err);
        context.setVariable("response.content",errPassed);  
}*/
var otheraccount = {
        'status_code': 200,
		'card_number' : accNum,
		'balance_present' : 300,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
    
}
 var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
            context.setVariable("response.header.x-target-response-code", 200);
        var errPassed = JSON.stringify(otheraccount);
        context.setVariable("response.header.x-target-response-code", 200);
        context.setVariable("response.content",errPassed);  
    
}

if(accNum==="4671345612343456"){
var otheraccount2 = {
        'status_code': 200,
		'card_number' : accNum,
		'balance_present' : 1000,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
    
};
 var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var errPassed2 = JSON.stringify(otheraccount2);
        context.setVariable("response.header.x-target-response-code", 200);
        context.setVariable("response.content",errPassed2);  
    
}


}else{
        var err = {
              'status_code': 204,
		      'message' : "Card is invalid"
        };
         var errPassed1 = JSON.stringify(err);
         context.setVariable("response.header.x-target-response-code", 204);
         context.setVariable("response.content",errPassed1);
         
     
}
}
}

 