
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
var e = {
        'status_code': 200,
		'redeem_points' : points,
		'subscriptionid':subsriptionid,
	    'timestamp' : Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear()+","+hoursIST+":"+minutesIST+":"+secsIST
	};

        var response = JSON.stringify(e);
       context.setVariable("response.content",response);  


  