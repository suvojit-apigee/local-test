var express = require('express');
var usergrid = require('usergrid');
var apigee = require('apigee-access');
var config = require('./config');

var app = express();
app.use(express.bodyParser());

var client = new usergrid.client({
	'orgName' : config.organization,
	'appName' : config.application,
	'clientId' : config.clientId,
	'clientSecret' : config.clientSecret,
	'authType' : usergrid.AUTH_CLIENT_ID,
	'logging' : config.logging
});

/*var rootTemplate = {
	'card' : {
		'href' : './cards/{cardnumber}'
	}
};*/

app.get('/cards/:cardnumber', function(req, res) {	
		getProfilesbyID(req, res);
});
app.get('/cards', function(req, res) {	
		getProfiles(req, res);
});

app.get('/cards/*/balances', function(req, res) {	
		returnResponse(req, res);
});

app.post('/cards/*/activate', function(req, res) {	
		returnResponse(req, res);
});
app.post('/cards/*/deactivate', function(req, res) {	
		returnResponse(req, res);
});
app.get('/cards/*/accounts', function(req, res) {	
		returnResponse(req, res);
});

app.get('/cards/:cardnumber', function(req, res) {	
		getProfilesbyID(req, res);
});
function getProfilesbyID(req, res) {
	client.createCollection({
		type : 'cardaccount',
	//	qs:{ql:'order by created DESC',limit:'20'}
	    qs:{ql:'where card_number=\'' + req.params.cardnumber + '\''} 
	
    	}, function(err, cardaccount) {
    		if (err) {
    			res.jsonp(500, {
    				'error' : JSON.stringify(err)
    			});
    			return;
    		}
    
    		var emps = [];
    		while (cardaccount.hasNextEntity()) {
    			var emp = cardaccount.getNextEntity().get();
    			var e = {
    			    	'card' : {
            				'card_number' : emp.card_number,
            		        'first_name' : emp.first_name,
            		        'last_name' : emp.last_name,
            		        'phone' : emp.phone,
            	        	'address' : emp.address,
            	        	'dob' : emp.dob,
            	        	'cardholder_id' : emp.cardholder_id,
            	        	'card_expiration_date' : emp.card_expiration_date
    			}};
    			emps.push(e);
    		}
    		console.log("lengths of emps"+ emps.length);
    		if((emps.length === null) || (emps.length === 0)) {
    		  console.log("Inside if block when emps length == null");  
    		    res.jsonp(404, {'error' : "Card Number not present in the database." });
		        return;
    		} else {
    		    res.jsonp(200,emps);
    		}
    	});
}

function getProfiles(req, res) {
	client.createCollection({
		type : 'cardaccount',
	qs:{ql:'order by created DESC',limit:'20'}
	//qs:{ql:'cardholderid='+req.params.cardholderid+ 'order by by created DESC',limit:'20'}
	
    	}, function(err, cardaccount) {
    		if (err) {
    			res.jsonp(500, {
    				'error' : JSON.stringify(err)
    			});
    			return;
    		}
    
    		var emps = [];
    		while (cardaccount.hasNextEntity()) {
    			var emp = cardaccount.getNextEntity().get();
    			var e = {
    			    'card' : {
    				'card_number' : emp.card_number,
    		        'first_name' : emp.first_Name,
    		        'last_name' : emp.last_Name,
    		        'phone' : emp.phone,
    	        	'address' : emp.address,
    	        	'dob' : emp.dob,
    	        	'cardholder_id' : emp.cardholder_id,
    	        	'card_expiration_date' : emp.card_expiration_date
    			}};
    			emps.push(e);
    		}
    		res.jsonp(200,emps);
    	});
}
function returnResponse(req, res) {
    var otheraccount = {
        'status_code': 200
	 }
	res.jsonp(200,otheraccount);
}
//Last cardholder ID
// POST /profile
function getDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear()+3;
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    //return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
    return year + ":" + month + ":" + day;
}
app.post('/cards', function(req, res) {
	if (!req.is('json')) {
		res.jsonp(400, {
			'error' : 'Invalid Json file. Please provide a valid json.'
		});
		return;
	}
   	var b = req.body;
	var date = new Date();
	cid=date.getTime();
	var expdate=getDateTime();
	var e = {
		'card_number' : b.card_number,
		'first_name' : b.first_name,
		'last_name' : b.last_name,
		'phone' : b.phone,
		'address' : b.address,
		'dob' : b.dob,
		'cardholder_id' : cid,
		'card_expiration_date' : expdate
	};
	  //  console.log("cardnumber== "+e.cardnumber+" "+"firstname== "+e.firstName+" "+"lastname== "+e.lastName);

	if ((e.card_number === undefined) || (e.first_name === undefined)
			|| (e.last_name === undefined)) {
		res.jsonp(400, {
			'error' : 'Either cardnumber or firstname/lastname not provided.'
		});
		return;
	}

	createProfile(e, req, res);
});

// This function will check existing card number in the database
/*function getcardnumber(cardnumber) {
    console.log("cardnumber=="+cardnumber);
    var e;
    var cardAccount = [];
	client.createCollection({
		type : 'cardaccount',
	    qs:{ql:'where cardnumber=\'' + cardnumber + '\''} 
    	}, function(err, cardaccount) {
    		if (err) {
    			res.jsonp(500, {
    				'error' : JSON.stringify(err)
    			});
    			return;
    		}
    		while (cardaccount.hasNextEntity()) {
    			var emp = cardaccount.getNextEntity().get();
    			var e = {
    			    	'card' : {
            				'cardnumber' : emp.cardnumber,
            		        'firstName' : emp.firstName,
            		        'lastName' : emp.lastName,
            		        'phone' : emp.phone,
            	        	'address' : emp.address,
            	        	'dob' : emp.dob,
            	        	'cardholderid' : emp.cardholderid,
            	        	'cardexpirationdate' : emp.cardexpirationdate
    			}};
    				cardAccount.push(e);
    		}
    	 console.log("cardAccount== "+ JSON.stringify(cardAccount));
    	
    	});
     return cardAccount;
}*/

function createProfile(e, req, res) {
	var opts = {
		type : 'cardaccount',
		name : e.card_number
	};
    var cardAccount = [];
	client.createCollection({
		type : 'cardaccount',
	    qs:{ql:'where cardnumber=\'' + e.cardnumber + '\''} 
    	}, function(err, cardaccount) {
    		if (err) {
    			res.jsonp(500, {
    				'error' : JSON.stringify(err)
    			});
    			return;
    		}
    		while (cardaccount.hasNextEntity()) {
    			var emp = cardaccount.getNextEntity().get();
    			var e = {
    			    	'card' : {
            				'card_number' : emp.card_number,
            		        'first_name' : emp.first_name,
            		        'last_name' : emp.last_name,
            		        'phone' : emp.phone,
            	        	'address' : emp.address,
            	        	'dob' : emp.dob,
            	        	'cardholder_id' : emp.cardholder_id,
            	        	'card_expiration_date' : emp.card_expiration_date
    			}};
    				cardAccount.push(e);
    		}
    	 console.log("cardAccount== "+ JSON.stringify(cardAccount));
    	
    	});
//var card = getcardnumber(e.cardnumber);
console.log("The card returned== "+ JSON.stringify(cardAccount));
if (cardAccount.length === null || cardAccount.length === 0)
{
	client.createEntity(opts, function(err, o) {
		if (err) {
			res.jsonp(500, err);
			return;
		}
		o.set(e);
		o.save(function(err) {
			if (err) {
			    res.jsonp(500, err);
				return;
			}
			 var apikey = apigee.getVariable(req, 'api_key');
			 var req_host = apigee.getVariable(req, 'request.header.host');
			 var req_scheme = apigee.getVariable(req,'client.scheme');
			 var crd = {
			        'cardaccount' : {
                                'message' : "The following card is created successfully",
                                'message_id' : "201",
                                'card_number' : e.card_number,
                    	    	'cardholder_id' : e.cardholder_id,
                                'card_expiration_date' : e.card_expiration_date  },
                                "links": [{
                                            "href": req_scheme + "://" + req_host+"/v1/issuance/cards/"+e.card_number+"?api_key="+apikey,
                                            "rel": "self",
                                            "method": "GET"
                                         }]
                                
			    };
                                res.jsonp(crd);
		    });
	    });
    } else {
        res.jsonp(405, {'error' : "Card Number already present in the database. Please provide a new cardnumber" });
    }
}


// Listen for requests until the server is stopped

app.listen(process.env.PORT || 9000);
console.log('The server is running!');