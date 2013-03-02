		var date = new Date();
		var day = date.getDay();
		var hour = date.getHours();
		var min = date.getMinutes();
		
		function check(){
			setStatus(".Fer_status", checkFer());
			setStatus(".JohnJay_status",checkJohnJay());
			setStatus(".JJs_status", checkJJs());
		}
		
		function checkFer(){
			var status;
			switch (day)
			{
				default:
					if(hour >= 8 && hour < 20){
						status = "Open";
					} else {
						status = "Closed";
					}
				case 0:
					status = "Closed";
				case 6:
					if(hour >= 10 && hour < 14){
						if(hour == 10 && min < 30){
							status = "Closed";
						} else {
							status = "Open";
						}
					} else if(hour >= 17 && hour < 20){
						status = "Open";
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
				default:
					if((hour >= 11 && hour < 14) || (hour >= 17 && hour < 20)){
						status = "Open";
					} else {
						status = "Closed";
					}
				case 0:
					if((hour >= 10 && hour < 14) || (hour >= 17 && hour < 20)){
						status = "Open";
					} else {
						status = "Closed";
					}
				case 5:
					status = "Closed";
				case 6:
					status = "Closed";	
			}
			return status;
		}
		
		function checkJJs(){
			var status;
			switch (day)
			{
				default:
					if(hour >= 20 || hour < 1){
						status = "Open";
					} else {
						status = "Closed";
					}
				case 0:
					if(hour >= 12 || hour < 1){
						status = "Open";
					} else {
						status = "Closed";
					}
				case 1:
					if(hour >= 12 || hour < 1){
						status = "Open";
					} else {
						status = "Closed";
					}
				case 5:
					if(hour >= 12 && hour < 20){
						status = "Open";
					} else {
						status = "Closed";
					}
				case 6:
					if(hour >= 12 && hour < 20){
						status = "Open";
					} else {
						status = "Closed";
					}	
			}
			return status;
		}
		
		function setStatus(hall, status){
			$(hall).append(status);
		}