// Creating a entry into mongodb
function send() {
	$.ajax({
		url: "http://localhost:8000/notes",
		data: { value: $('#txtValue').val() },
		method: "POST",
		success: (data) => {
			console.log(data)
			
		}
	});
}

//Deleting an entry into mongodb
function Delete() {
	var newUrl = "http://localhost:8000/notes/" + $('#txtID').val()
	$.ajax({
		url: newUrl,
		data: { value: $('#txtID').val() },
		method: "DELETE",
		success: (data) => {
			console.log(data)
			
		}
	});
}

//Updating and entry into mongodb
function Update() {
	var newUrl = "http://localhost:8000/notes/" + $('#txtUpdate').val()
	$.ajax({
		url: newUrl,
		data: { value: $('#txtnew').val() },
		method: "PUT",
		success: (data) => {
			console.log(data)
			
		}
	});
}

//Retrieving and entry from mongodb
function Retrieve() {
	$.ajax({
		
		method: "GET",
		url: "http://localhost:8000/notes",	
		dataType:"text",
		success: (data) => {
			$("#retAll").val(data.valueOf("text"))
			
			
		}
	});
}