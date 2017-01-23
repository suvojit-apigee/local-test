var card_number = null;
if((typeof context.getVariable("param1")!== 'undefined') && (context.getVariable("param1")!==null)){
card_number = context.getVariable("param1"); 

}
if(card_number==="4671345612345555"){
var cust = {
        'first_name': "Ajay",
		'last_name' : "Roy",
		'phone' : "9433056789",
		'address' : "Saltlake - Kolkata",
		'dob': "29/09/2008",
		'account_id' : "4444567223142156"
	  };
	 
	     
         var cust_details = JSON.stringify(cust);
         context.setVariable("response.content",cust_details);
         
   }else{
         var err = {
                     'status_code': 204,
		             'card_number' : "Card is invalid"
     };
         var errpassed = JSON.stringify(err);
         context.setVariable("response.content",errpassed);
}
   
