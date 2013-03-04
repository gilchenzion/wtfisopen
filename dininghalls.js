		var date = new Date();
		var day = date.getDay();
		var hour = date.getHours();
		var min = date.getMinutes();
		
		function check(){
			setStatus("Fer", checkFer());
			setStatus("JohnJay",checkJohnJay());
			setStatus("JJs", checkJJs());
		}
		
		function checkFer(){
			var status;
			switch (day)
			{
				
				case 0:
					status = "Closed";
					break;
				case 6:
					if(hour >= 10 && hour < 14){
						if(hour == 10 && min < 30){
							status = "Closed";
						} else {
							status = "BN";
						}
					} else if(hour >= 17 && hour < 20){
						status = "DN";
					} else {
						status = "Closed";
					}	
					break;
				default:
					if(hour >= 8 && hour < 20){
						if( hour < 11 ) {
							status = "BR";
						} else if (hour < 16 ) {
							status = "LU";
						} else{
							status = "DN";
						}
					} else {
						status = "Closed";
					}	
			}
			return status;
		}
		
		function checkJohnJay(){
			var status;
			switch (day)
			{
				case 0:
					if((hour >= 10 && hour < 14) || (hour >= 17 && hour < 20)){
						if (hour < 14)
							status = "BN";
						else
							status = "DN";
					} else {
						status = "Closed";
					}
					break;
				case 5:
					status = "Closed";
					break;
				case 6:
					status = "Closed";	
					break;
				default:
					if((hour >= 11 && hour < 14) || (hour >= 17 && hour < 20)){
						if (hour < 14){
							status = "BN";
						} else {
							status = "DN";
						}
					} else {
						status = "Closed";
					}
			}
			return status;
		}
		
		function checkJJs(){
			var status;
			switch (day)
			{
				
				case 0:
					if(hour >= 12 || hour < 1){
						if (hour < 20)
							status = "BN";
						else
							status = "LN";
					} else {
						status = "Closed";
					}
					break;
				case 1:
					if(hour >= 12 || hour < 1){
						if (hour < 20)
							status = "BN";
						else
							status = "LN";
					} else {
						status = "Closed";
					}
					break;
				case 5:
					if(hour >= 12 && hour < 20){
						status = "BN";
					} else {
						status = "Closed";
					}
				case 6:
					if(hour >= 12 && hour < 20){
						status = "BN";
					} else {
						status = "Closed";
					}
					break;	
				default:
					if(hour >= 20 || hour < 1){
						status = "LN";
					} else {
						status = "Closed";
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
		
		function getFullName(status){
			if ( status == "DN") {
				return "Dinner";
			} else if (status == "BN") {
				return "Brunch";
			} else if (status == "BR") {
				return "Breakfast";
			} else if (status == "LU") {
				return "Lunch";
			} else if (status == "LN") {
				return "Late Night";
			} else {
				return "Closed";
			}
		}