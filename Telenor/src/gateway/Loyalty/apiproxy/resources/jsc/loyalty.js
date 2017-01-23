var acctNumLoyalty1 = {
    accntNum : "4441244566782134",
    subscriptionid : "tt033"

}

var acctNumLoyalty2 = {
    accntNum : "4441244566782135",
    subscriptionid : "fpk056"

}

var acctNumLoyalty3 = {
    accntNum : "4441244566782136",
    subscriptionid : "nk044"
}

var acctNumLoyalty4 = {
    accntNum : "4441244566782137",
    subscriptionid : "sea023"
    
}

var account_number = null;
var loyalty_id = null;
var apikey = null;
var boolean = false;

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

if((context.getVariable("card_number")==='undefined') && (context.getVariable("card_number")===null)){
     print("inside check path parameter if block");
     print ("value of path paramerter == "+context.getVariable("card_number"));
      var g = {
        'status_code': 204,
		'message' : "Cardnumber not found in the URI path, please provide valid cardnumber in the path..",
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
	    var passed2 = JSON.stringify(g);
        context.setVariable("response.content",passed2);
 }else{
  apikey = context.getVariable("api_key");
  account_number = context.getVariable("card_number");
 
 if(account_number===acctNumLoyalty1.accntNum||account_number===acctNumLoyalty2.accntNum||account_number===acctNumLoyalty3.accntNum||account_number===acctNumLoyalty4.accntNum){
     
    boolean = true; 
 }

if(boolean===true){

if(account_number===acctNumLoyalty1.accntNum){
    var e = {
        'status_code': 200,
        accntNum : "4441244566782134",
        subscriptionid : "tt033"
	};

        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var passed1 = JSON.stringify(e);
        context.setVariable("response.content",passed1);
    }
}if(account_number===acctNumLoyalty2.accntNum){
         var f = {
        'status_code': 200,
		'card_number' : account_number,
		
	};

           var condition_status = context.getVariable("condition.status");
           if(condition_status !==null || condition_status!==''){
           var passed2 = JSON.stringify(f);
           context.setVariable("response.content",passed2);
    }
}if(account_number===acctNumLoyalty3.accntNum){
         var g = {
           accntNum : "4441244566782137",
             subscriptionid : "sea023",
	
	};

        var condition_status = context.getVariable("condition.status");
        if(condition_status !==null || condition_status!==''){
        var passed3 = JSON.stringify(g);
        context.setVariable("response.content",passed3);
    }
}if(account_number===acctNumLoyalty4.accntNum){
         var h = {
        'status_code': 200,
		'card_number' : accNum,
	
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
		'message' : "The Card is Invalid.. Please give a valid card for getting subscription id",
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
       var errPrint1 = JSON.stringify(err1);
       context.setVariable("response.content",errPrint1);  
}
}
  