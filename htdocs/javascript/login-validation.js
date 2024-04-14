


function validation() {
  var email = document.getElementById("exampleInputEmail1");
  var password = document.getElementById("exampleInputPassword1");

  if (email.value.trim() == "" || password.value.trim() == "") {
    alert("No blank value allowed");
    return false;
  } else 
  return true;
}

// this is the id of the form
$("#adminLoginForm").submit(function(e) {

  e.preventDefault(); // avoid to execute the actual submit of the form.

  var form = $(this);
  var actionUrl = form.attr('action');
  
  $.ajax({
      type: "POST",
      url: actionUrl,
      data: form.serialize(), // serializes the form's elements.
      success: function(data)
      {
        alert(data); // show response from the php script.
      }
  });
  
});