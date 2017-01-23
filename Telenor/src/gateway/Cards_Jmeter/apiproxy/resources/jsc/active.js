var card_number = null;
if((typeof context.getVariable("param1")!== 'undefined') && (context.getVariable("param1")!==null)){
card_number = context.getVariable("param1"); 

}
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

if(card_number==="4671345612345555"){
 var e = {
        'status_code': 200,
		'card_number' : card_number,
		'status' : "Activated",
		'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	  };
	 
	     var condition_status = context.getVariable("condition.status");
         if(condition_status !==null || condition_status!==''){
         var passed = JSON.stringify(e);
         context.setVariable("response.content",passed);
         
   }
}else{
       var err = {
                     'status_code': 204,
		             'card_number' : "Card is invalid"
     };
         var errpassed = JSON.stringify(err);
         context.setVariable("response.content",errpassed);
}


























