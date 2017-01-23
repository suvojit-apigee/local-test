var accntArray = ["4441244566782134","4443425678962315","4441244566782136","4441244566782138"];
var accNum = null;
var boolean = false;
var randNum = 0;
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

 if((typeof context.getVariable("card_number")=== 'undefined') || (context.getVariable("card_number")===null) || (context.getVariable("card_number")==='')){
     print("inside check path parameter if block");
     print ("value of path paramerter == "+context.getVariable("card_number"));
      var g = {
        'status_code': 204,
		'message' : "Cardnumber not found in the URI path, please provide valid cardnumber ..",
	    'time_stamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
	    var uripath = JSON.stringify(g);
        context.setVariable("response.content",uripath);
 } else {
      print("inside else block ");
      accNum = context.getVariable("card_number");
     print("accNum == " + accNum);
 var accLen = accntArray.length;
 for(i=0;i<accLen;i++){
     if(accNum===accntArray[i]){
        randNum = Math.floor(100000 + Math.random() * 900000);
        boolean = true;
        break;
     }
  }
 if(boolean===true){
     var e = {
        'status_code': 200,
		'card_number' : accNum,
		'otp_generated' : randNum,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};
     var condition_status = context.getVariable("condition.status");
         if(condition_status !==null || condition_status!==''){
         var success = JSON.stringify(e);
         context.setVariable("response.content",success);
         
   }
 }else{
         
         var f = {
        'status_code': 204,
        'message' : "Card is not valid for the generation of OTP",
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
      };  
	    var failed = JSON.stringify(f);
        context.setVariable("response.content",failed);
 }
 }
 