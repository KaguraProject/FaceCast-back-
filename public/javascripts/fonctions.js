
function sendName(){
	var name = $('#name').val();
	var blueClass = 'blue lighten-4';
	var redClass = 'red accent-4';
	console.log(name);
	if(name.length > 0){
		$('#nameBorder').removeClass(redClass).addClass(blueClass);
		name = name.replace(/[^a-zA-Z0-9]/g,'');
		window.location.href = "/n/" + name;
	}else{
		$('#nameBorder').removeClass(blueClass).addClass(redClass);
		$('#nameHint').addClass('red-text text-darken-red-4')
	}
}

function showSideBar(){
	console.log('ok');
	$(".side-nav").slideToggle('slow');
}


function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }
    console.log(form);
    console.log(params);
    console.log(hiddenField);
    document.body.appendChild(form);
    form.submit();
}