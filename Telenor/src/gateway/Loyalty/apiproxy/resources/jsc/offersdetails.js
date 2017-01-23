var offer_id = null;


var offerid=context.getVariable("offerid");

if(offerid==='promo20'){
var offerdetails = {
        'status_code': 200,
		'offers' : "20% cashback on all purchases over U.S $100",
		'offers validity' : "Oct 20th 2016 - 20th Dec 2016",
		'offerid':offerid
	    
	};

       var response = JSON.stringify(offerdetails);
       context.setVariable("response.content",response);  

}else{
    
     var errdetails = {
        'status_code': 204,
		'message' : "Invalid offer id",
	};
	
	   var errresponse = JSON.stringify(errdetails);
       context.setVariable("response.content",errresponse);
      
}
    