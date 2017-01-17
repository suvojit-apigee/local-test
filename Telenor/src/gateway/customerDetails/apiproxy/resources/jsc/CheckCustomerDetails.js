 function CheckCustomerDetails() {
     var currentFlow = context.flow;
     if (currentFlow == "SetCustomerDetails"){
         var id = context.targetRequest.body.asXML.ID;
         var firstname = context.targetRequest.body.asXML.FIRSTNAME;
         var lastname = context.targetRequest.body.asXML.LASTNAME;
         var street = context.targetRequest.body.asXML.STREET;
         var city = context.targetRequest.body.asXML.CITY;
         print("The request body: " + "id: "+ id + " firstname: " + firstname);
         if ((id = null) || (id = '')){
             setResponse(outputFormat, "500", "Internal Server Error", "Unknown Error Occurred", err.message);
             
         }
     }
 }
 function setResponse(errorStatus, errorReason, errorMessage, errorDetail) {


	var errorContent = "";



	var json = {};
	json.Error = {};
	json.Error.Message = errorMessage;
	json.Error.Detail = errorDetail;

	errorContent = JSON.stringify(json);

	context.setVariable("error.status.code", errorStatus);
	context.setVariable("error.reason.phrase", errorReason);
	context.setVariable("error.header.Content-Type", "application/json");
	context.setVariable("error.content", errorContent);


}