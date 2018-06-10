
function Clock(){
  var date = new Date();

	var years = date.getFullYear();
	var months = date.getMonth()+1;
	var days = date.getDate();
	var dayName = date.getDay();

	var dayNameString = '';
	
	if (dayName == 0 ) {
		dayNameString = 'Vasárnap';
	}
	
	if (dayName == 1 ) {
		dayNameString = 'Hétfő';
	}
	
	if (dayName == 2 ) {
		dayNameString = 'Kedd';
	}
	
	if (dayName == 3 ) {
		dayNameString = 'Szerda';
	}
	
	if (dayName == 4 ) {
		dayNameString = 'Csütörtök';
	}
	
	if (dayName == 5 ) {
		dayNameString = 'Péntek';
	}
	
	if (dayName == 6 ) {
		dayNameString = 'Szombat';
	}
	
	if (months <= 9) {
		months = "0" + months;
	}
	
	if (days <= 9) {
		days = "0" + days;
	}

  var dateLine = years + '. ' +months+ '. ' + days+ '.  '+dayNameString;
	
  document.getElementById('clock').innerHTML = dateLine;
  
  setTimeout(function() {
    Clock();
  }, 1000);
}

Clock();

