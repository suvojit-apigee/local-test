var loyalty_id = null;
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
var points=context.getVariable("points")
var subsriptionid=context.getVariable("subscriptionid")

if(subsriptionid==='tt033'){
var e = {
        'status_code': 200,
		'offers' : "10-20% cashback on all dinings and discounts on fasttrack,rayban brands",
		'offers validity' : "Oct 20th 2016 - 20th Nov 2016",
		'subscriptionid':subsriptionid,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};

       var response = JSON.stringify(e);
       context.setVariable("response.content",response);  
}else{

  var err = {       
                'status_code': 204,
		        'message' : "Invalid subscription id",
			}; 
			
			var errresponse = JSON.stringify(err);
            context.setVariable("response.content",errresponse);  
}

   