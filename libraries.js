var date = new Date();
var day = date.getDay();
var hour = date.getHours();


function check()
{
	setStatus("Butler", checkButler());
	setStatus("Avery", checkAvery());
	setStatus("Lehman", checkLehman());
	}
	
function checkButler()
{
	var status = "Open";
}
function checkAvery()
{
	var status = "Closed";
	switch(day)
	{
		case 0:
			if(hour >= 12 && hour < 22)
				{
					status = "Open";
				}
			break;
		case 5: 
			if(hour >= 9 && hour < 21)
				{
					status = "Open";
				}
			break;
		case 6: 
			if(hour >= 10 && hour < 19)
				{
					status = "Open";
				}
			break;
		default:
			if(hour >= 9 && hour < 23)
			{
					status = "Open";
			}
	}
	return status;
}

function checkLehman()
{
var status = "Closed";
	switch(day)
	{
		case 0:
			if(hour >= 11 && hour < 23)
				{
					status = "Open";
				}
			break;
		case 5: 
			if(hour >= 9 && hour < 19)
				{
					status = "Open";
				}
			break;
		case 6: 
			if(hour >= 10 && hour < 18)
				{
					status = "Open";
				}
			break;
		default:
			if(hour >= 9 && hour <= 23)
			{
					status = "Open";
			}
	}
	return status;
}

function setStatus(hall, status){
			if(status != "Closed") {
				$("." + hall + "_status").append("Open");
				$("." + hall + "_status").css('color', '#76EE00');
			} else {
				$("." + hall + "_status").append(status);
				$("." + hall + "_status").css('color', 'red');
			}
		}