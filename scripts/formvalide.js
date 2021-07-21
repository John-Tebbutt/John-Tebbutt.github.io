  // jt script for form validation
  function validateForm()
  {
 	var jt1=document.forms["contactform"]["nom"].value;
 	var jt2=document.forms["contactform"]["prenom"].value;
 	var jt3=document.forms["contactform"]["email_adresse"].value;
	var atpos=jt3.indexOf("@");
	var dotpos=jt3.lastIndexOf(".");
 	var jt4=document.forms["contactform"]["message_pour_cherry_lodge"].value;
 	if (jt1==null || jt1=="")
   		{
   		alert("S'il vous plait entrer votre Nom.");
   		return false;
   		}
 	if (jt2==null || jt2=="")
   		{
   		alert("S'il vous plait entrer votre Prenom.");
   		return false;
   		}
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=jt3.length)
  		{
  		alert("S'il vous plait entrer votre Adresse Courriel.");
  		return false;
  		}
 	if (jt4==null || jt4=="")
   		{
   		alert("S'il vous plait entrer votre message pour Cherry Lodge.");
   		return false;
   		}
  }
