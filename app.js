
(function(){
 var app = angular.module('booking', [ ]);
    
 app.controller('BookingController', function(){
     this.products = day1s;
 });
    
 app.controller('Day2Controller', function(){
     this.products = day2s;
 });
    
 app.controller('Day3Controller', function(){
     this.products = day3s;
 });
    
 app.controller('Day4Controller', function(){
     this.products = day4s;
 });
    
 app.controller('Day5Controller', function(){
     this.products = day5s;
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

    
    
    var day1s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];
    
    
    var day2s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];
    
    var day3s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.101", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];
    
    var day4s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.101", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];
    
    var day5s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.101", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];
    
})();    
 

 