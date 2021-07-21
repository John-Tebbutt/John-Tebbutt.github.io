  // jt script for form validation
  function validateForm()
  {
 	var jt1=document.forms["contactform"]["first_name"].value;
 	var jt2=document.forms["contactform"]["last_name"].value;
 	var jt3=document.forms["contactform"]["email_address"].value;
	var atpos=jt3.indexOf("@");
	var dotpos=jt3.lastIndexOf(".");
 	var jt4=document.forms["contactform"]["message_contents"].value;
 	if (jt1==null || jt1=="")
   		{
   		alert("Please enter your First Name.");
   		return false;
   		}
 	if (jt2==null || jt2=="")
   		{
   		alert("Please enter your Last Name.");
   		return false;
   		}
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=jt3.length)
  		{
  		alert("Please enter a valid email address.");
  		return false;
  		}
 	if (jt4==null || jt4=="")
   		{
   		alert("Please enter your message for Cherry Lodge.");
   		return false;
   		}
  }
