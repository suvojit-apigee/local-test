var acctNumLoyalty1 = {
    accntNum : "4441244566782134",
    loyaltyid : "tt033",
    loyaltyPoints : 10
}

var acctNumLoyalty2 = {
    accntNum : "4441244566782135",
    loyaltyid : "fpk056",
    loyaltyPoints : 14
}

var acctNumLoyalty3 = {
    accntNum : "4441244566782136",
    loyaltyid : "nk044",
    loyaltyPoints : 16
}

var acctNumLoyalty4 = {
    accntNum : "4441244566782137",
    loyaltyid : "sea023",
    loyaltyPoints : 18
}

var accNum = null;
var accNumNew = null;
var loyalty_id = null;
var redeem_points = null;
var redeem_points1 = null;
var redeem_points2 = null;
var redeem_points3 = null;
var redeem_points4 = null;
var b1 = false;
var acc_b1 = false;
var acc_b2 = false;
var acc_b3 = false;
var acc_b4 = false;
var final1 = false;
var final2 = false;
var final3 = false;
var final4 = false;

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
		'message' : "Loyaltyid is not present, please provide valid loyaltyid in the path..",
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
	    var passed2 = JSON.stringify(g);
        context.setVariable("response.content",passed2);
 }else{
 loyalty_id = context.getVariable("param1");
 if(loyalty_id===acctNumLoyalty1.loyaltyid||loyalty_id===acctNumLoyalty2.loyaltyid||loyalty_id===acctNumLoyalty3.loyaltyid||loyalty_id===acctNumLoyalty4.loyaltyid){
    b1 = true; 
 }

if(b1===true){

if(loyalty_id===acctNumLoyalty1.loyaltyid){
    var e = {
        'status_code': 200,
		'card_number' : acctNumLoyalty1.accntNum,
		'loyalty_points' : acctNumLoyalty1.loyaltyPoints,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};

        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var passed1 = JSON.stringify(e);
        context.setVariable("response.content",passed1);
    }
}if(loyalty_id===acctNumLoyalty2.loyaltyid){
         var f = {
        'status_code': 200,
		'card_number' : acctNumLoyalty2.accntNum,
		'loyalty_points' : acctNumLoyalty2.loyaltyPoints,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};

         var condition_status = context.getVariable("condition.status");
         if(condition_status !==null || condition_status!==''){
         var passed2 = JSON.stringify(f);
         context.setVariable("response.content",passed2);
    }
}if(loyalty_id===acctNumLoyalty3.loyaltyid){
         var g = {
        'status_code': 200,
		'card_number' : acctNumLoyalty3.accntNum,
		'loyalty_points' : acctNumLoyalty3.loyaltyPoints,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};

        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var passed3 = JSON.stringify(g);
        context.setVariable("response.content",passed3);
    }
}if(loyalty_id===acctNumLoyalty4.loyaltyid){
         var h = {
        'status_code': 200,
		'card_number' : acctNumLoyalty4.accntNum,
		'loyalty_points' : acctNumLoyalty4.loyaltyPoints,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};

        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var passed4 = JSON.stringify(h);
        context.setVariable("response.content",passed4);
    }
  }
}else{
    
        var err1 = {
        'status_code': 204,
		'message' : "The loyalty id is Invalid.. Please give a valid loyalty id for getting loyalty points",
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
       var errPrint1 = JSON.stringify(err1);
       context.setVariable("response.content",errPrint1);  
}
}
 