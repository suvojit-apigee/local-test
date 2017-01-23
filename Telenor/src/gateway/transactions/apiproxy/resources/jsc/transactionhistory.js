var accntArray = ["4441244566782134","4443425678962315","4441244566782136","4441244566782137"];
var accNum = null;
var acctfound = false;
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
 fromdate = context.getVariable("from_date");
 todate = context.getVariable("to_date");
 accNum = context.getVariable("card_number")
 var page_num = context.getVariable("page_number");
  if((context.getVariable("card_number")!=='undefined') && (context.getVariable("card_number")!==null)){
     var response = {
    "fromdate":fromdate,
    "todate":todate,
    transactions:
    [{
     "transaction_token":"0001111" ,  
    "account_id": 999991111,
	"acting_user_token": "sujits",
	"card_number": accNum,
	"type": "string",
	"duration": 10,
	"created_time": "2014-10-28T07:45:19Z",
	"request_amount": 20,
	"amount": 20,
	"issuer_interchange_amount": 1.03,
	"currency_code": "USD",
	"approval_code": "2001",
	"response": {
		"code": "200",
		"memo": "authorized transaction"
	}
    },
    {
    "transaction_token":"000222" ,
    "account_id":999991111,
	"acting_user_token": "sujits",
	"card_number": accNum,
	"type": "string",
	"duration": 20,
	"created_time": "2014-11-28T07:45:19Z",
	"request_amount": 40,
	"amount": 40,
	"issuer_interchange_amount": 1.03,
	"currency_code": "USD",
	"approval_code": "2001",
	"response": {
		"code": "200",
		"memo": "void transaction"
	}
    },
      {
    "transaction_token":"000333" ,
    "account_id": 999991111,
	"acting_user_token": "sujits",
	"card_number": accNum,
	"type": "string",
	"duration": 20,
	"created_time": "2014-12-28T07:45:19Z",
	"request_amount": 10,
	"amount": 10,
	"issuer_interchange_amount": 1.03,
	"currency_code": "USD",
	"approval_code": "2001",
	"response": {
		"code": "200",
		"memo": "pending transaction",
	}
    },
	]
      
};
             var passed1 = JSON.stringify(response);
             print(passed1);
             context.setVariable("error.header.Content-Type", "application/json");
             context.setVariable("response.content",passed1);
	}
 else{
                var response = {
    "fromdate":fromdate,
    "todate":todate,
    transactions:
    [{
     "transaction_token":"0001111" ,  
    "account_id": 999991111,
	"acting_user_token": "sujits",
	"card_number": "4441244566782134",
	"type": "string",
	"duration": 10,
	"created_time": "2014-10-28T07:45:19Z",
	"request_amount": 20,
	"amount": 20,
	"issuer_interchange_amount": 1.03,
	"currency_code": "USD",
	"approval_code": "2001",
	"response": {
		"code": "200",
		"memo": "authorized transaction"
	}
    },
    {
    "transaction_token":"000222" ,
    "account_id":"444133466782135",
	"acting_user_token": "sujits",
	"card_number": "4441244566782134",
	"type": "string",
	"duration": 20,
	"created_time": "2014-11-28T07:45:19Z",
	"request_amount": 40,
	"amount": 40,
	"issuer_interchange_amount": 1.03,
	"currency_code": "USD",
	"approval_code": "2001",
	"response": {
		"code": "200",
		"memo": "void transaction"
	}
    },
      {
    "transaction_token":"000333" ,
    "account_id": "4441244566782156",
	"acting_user_token": "sujits",
	"card_number": "4441244566784334",
	"type": "string",
	"duration": 20,
	"created_time": "2014-12-28T07:45:19Z",
	"request_amount": 10,
	"amount": 10,
	"issuer_interchange_amount": 1.03,
	"currency_code": "USD",
	"approval_code": "2001",
	"response": {
		"code": "200",
		"memo": "pending transaction"
	}
    },
	]
    
};
             var passed1 = JSON.stringify(response);
             print(passed1);
             context.setVariable("error.header.Content-Type", "application/json");
             context.setVariable("response.content",passed1);
	
 }
 
 
 
 
 