var tags = [  
    "Thor", 
    "Iron Man", 
    "Captain America" 
      ]; 
function  Hit()
{
if (document.getElementById('robin').value =="Iron Man")
{   alert('Redirecting to page'+ ' ' +document.getElementById('robin').value);
    setTimeout(function() {
        window.location.href = "file:///C:/Users/HP/Desktop/JavaScript/Iron%20Man.html";
      }, 2000);
}
else if  (document.getElementById('robin').value == "Thor")
{   alert('Redirecting to page'+ ' ' +document.getElementById('robin').value);
    setTimeout(function() {
        window.location.href = "file:///C:/Users/HP/Desktop/JavaScript/Thor.html";
      }, 2000);
}
else if(document.getElementById('robin').value == "Captain America")
{   alert('Redirecting to page'+ ' ' +document.getElementById('robin').value);
    setTimeout(function() {
        window.location.href = "file:///C:/Users/HP/Desktop/JavaScript/Captain%20America.html";
      }, 2000);
}
else if(document.getElementById('robin').value == "Scarlet Witch")
{   alert('Redirecting to page'+ ' ' +document.getElementById('robin').value);
    setTimeout(function() {
        window.location.href = "file:///C:/Users/HP/Desktop/JavaScript/Scarlet%20Witch.html";
      }, 2000);
}
else if(document.getElementById('robin').value == "Hawkeye")
{   alert('Redirecting to page'+ ' ' +document.getElementById('robin').value);
    setTimeout(function() {
        window.location.href = "file:///C:/Users/HP/Desktop/JavaScript/Hawkeye.html";
      }, 2000);
}
else if(document.getElementById('robin').value == "Ant Man")
{   alert('Redirecting to page'+ ' ' +document.getElementById('robin').value);
    setTimeout(function() {
        window.location.href = "file:///C:/Users/HP/Desktop/JavaScript/Ant%20Man.html";
      }, 2000);
}
else if(document.getElementById('robin').value == "Wasp")
{   alert('Redirecting to page'+ ' ' +document.getElementById('robin').value);
    setTimeout(function() {
        window.location.href = "file:///C:/Users/HP/Desktop/JavaScript/Wasp.html";
      }, 2000);
}
else if(document.getElementById('robin').value == "Winter Soldier")
{   alert('Redirecting to page'+ ' ' +document.getElementById('robin').value);
    setTimeout(function() {
        window.location.href = "file:///C:/Users/HP/Desktop/JavaScript/Winter%20Soldier.html";
      }, 2000);
}
else if(document.getElementById('robin').value == "Hulk")
{   alert('Redirecting to page'+ ' ' +document.getElementById('robin').value);
    setTimeout(function() {
        window.location.href = "file:///C:/Users/HP/Desktop/JavaScript/Hulk.html";
      }, 2000);
}
else
{
    alert("Wrong Entry");
}
}
        