(function(){
 var app = angular.module('booking', [ ]);
    
 app.controller('BookingController', function($http){
	var vm = this;
	var url = "data/data.json";
	$http.get(url).success( function(response) {
		vm.products = response.rooms;
		console.log(response.rooms);
	});
 });
    
 app.controller('CalendarController', function() {
     this.tab = 0;
     
     this.selectTab = function(setTab) {
         this.tab = setTab;
     };
     
     this.isSelected = function(checkTab) {
        return this.tab === checkTab;
     };
 });  
})(); 