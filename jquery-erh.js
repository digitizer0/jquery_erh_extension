/*
 * Parses datestring and return date with added days
 */
$.fn.calcdate = function(datestring, add) {
	d = new Date(Date.parse(datestring));
	var day = d.getDate();
	d.setDate(day+add);
	
	var day = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	if (day < 10) {
		day = "0" + day;
	}
	if (month < 10) {
		month = "0" + month;
	}
	var date = year + "-" + month + "-" + day;
	
	return date;
};
	

/*
 * Gives true if element exist
 */
$.fn.exists = function() {
	return this.length > 0;
}
