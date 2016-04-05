function Init() {
      
	  
	  
     //alert("Here");
	 //../../../Attachments/Reports/
	

     $.get('products.txt', function(data) {
     alert(data);
    //process text file line by line
      
        $('#Results').html(data.replace('n',''));
    }, 'json'); 
	
	
	//Also set up a submit handler to launch a function when the form is submitted
	$("#submissionForm").submit(function() {
		//submitData();
		//return false;
	});
}



function downloadFormSettings() {
	$.post("serverprocessing/serverRequest.php", "submissionRequest=downloadFormSettings", function(data){
		//JSON data returned is in the "data" array
		
		//build a response for the company element
		htmlData = "<option value=\"\"></option>";
		for (var i in data.companyNames) {
			//in this example, I'm using the company id (index) for the option's value. 
			htmlData += "<option value=\"" + i + "\">" + data.companyNames[i] + "</option>";
		}
		
		$("#companyName").html(htmlData);
	},"json");
}


