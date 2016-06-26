function askQuestions(){


	var firstName = prompt('What is your first name?');
	var lastName = prompt ('What is your last name?');
	var fullName = firstName + ' ' + lastName;


	if (firstName.toLowerCase()==='general'&& lastName.toLowerCase() !=='Assembly') {

		alert ('Greetings, General!');
	}


	var age=prompt ('How old are you?');
	age=parseInt (age);

	if (age>= 18) {
			console.log ('user is an adult');

	} else if (age >= 13) {
		console.log ('User is a teenager');
	} else {

		console.log ('User is a child');
	}

	console.log (fullName);

	if (firstName = 'General') {

		console.log ('Hello!');
	}

	 
}



//anything after two slashes is also a comment

//when the page has loaded

$ (function (){

	$('img').on('click', askQuestions);
	$('h3').next().hide();


	//when the user clicks on an h3
	$('h3').on('click', function() {

		//toggle the section after the clicked h3
		$(this).next().slideToggle();

	});

});