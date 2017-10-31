(function(){
 var app = angular.module('booking', [ ]);
    
 app.controller('BookingController', function(){
     this.products = timetables;
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

    
    
var timetables = [
{id: "1", 
 rooms: [
    {no: "B1.15", booked: false, times: [
        {hour1: true, hour2: true, hour3: false, hour4: true, hour5: false, hour6: true, hour7: true, hour8: true, hour9: true}
    ]},
    {no: "B1.16", booked: false, times: [
        {hour1: true, hour2: true, hour3: true, hour4: true, hour5: false, hour6: false, hour7: true, hour8: true, hour9: true}
    ]},
    {no: "B1.17", booked: false, times: [
        {hour1: true, hour2: true, hour3: true, hour4: true, hour5: true, hour6: true, hour7: false, hour8: false, hour9: false}
    ]},
    {no: "B1.18", booked: false, times: [
        {hour1: false, hour2: false, hour3: false, hour4: true, hour5: true, hour6: true, hour7: true, hour8: false, hour9: false}
    ]},
    {no: "B1.19", booked: false, times: [
        {hour1: true, hour2: false, hour3: false, hour4: false, hour5: true, hour6: true, hour7: true, hour8: false, hour9: false}
    ]},

]

},

{id: "2", rooms: [
    {no: "B1.15", booked: false, times: [
        {hour1: true, hour2: true, hour3: false, hour4: true, hour5: false, hour6: true, hour7: false, hour8: false, hour9: false}
    ]},
    {no: "B1.16", booked: false, times: [
        {hour1: false, hour2: false, hour3: true, hour4: true, hour5: false, hour6: false, hour7: true, hour8: true, hour9: true}
    ]},
    {no: "B1.17", booked: false, times: [
        {hour1: true, hour2: true, hour3: false, hour4: false, hour5: true, hour6: true, hour7: false, hour8: false, hour9: false}
    ]},
    {no: "B1.18", booked: false, times: [
        {hour1: false, hour2: false, hour3: false, hour4: true, hour5: true, hour6: true, hour7: true, hour8: true, hour9: false}
    ]},
    {no: "B1.19", booked: false, times: [
        {hour1: true, hour2: false, hour3: false, hour4: false, hour5: false, hour6: false, hour7: true, hour8: false, hour9: true}
    ]},

]

},
    
    {id: "3", rooms: [
    {no: "B1.15", booked: false, time: [
        {hour1: true, hour2: true, hour3: false, hour4: true, hour5: false, hour6: true, hour7: true, hour8: false, hour9: false}
    ]},
    {no: "B1.16", booked: false, time: [
        {hour1: true, hour2: false, hour3: false, hour4: false, hour5: true, hour6: false, hour7: true, hour8: true, hour9: true}
    ]},
    {no: "B1.17", booked: false, time: [
        {hour1: true, hour2: true, hour3: false, hour4: true, hour5: true, hour6: true, hour7: true, hour8: true, hour9: false}
    ]},
    {no: "B1.18", booked: false, time: [
        {hour1: false, hour2: true, hour3: false, hour4: true, hour5: true, hour6: false, hour7: false, hour8: false, hour9: true}
    ]},
    {no: "B1.19", booked: false, time: [
        {hour1: true, hour2: true, hour3: false, hour4: false, hour5: true, hour6: true, hour7: true, hour8: false, hour9: false}
    ]},

]

},
    
    {id: "4", rooms: [
    {no: "B1.15", booked: false, time: [
        {hour1: true, hour2: true, hour3: true, hour4: true, hour5: false, hour6: true, hour7: true, hour8: false, hour9: false}
    ]},
    {no: "B1.16", booked: false, time: [
        {hour1: true, hour2: true, hour3: false, hour4: false, hour5: false, hour6: false, hour7: true, hour8: true, hour9: true}
    ]},
    {no: "B1.17", booked: false, time: [
        {hour1: true, hour2: true, hour3: true, hour4: true, hour5: false, hour6: false, hour7: true, hour8: true, hour9: true}
    ]},
    {no: "B1.18", booked: false, time: [
        {hour1: false, hour2: false, hour3: true, hour4: true, hour5: true, hour6: true, hour7: false, hour8: false, hour9: false}
    ]},
    {no: "B1.19", booked: false, time: [
        {hour1: true, hour2: true, hour3: true, hour4: false, hour5: true, hour6: false, hour7: false, hour8: false, hour9: false}
    ]},

]

},
    
{id: "5", rooms: [
    {no: "B1.15", booked: false, time: [
        {hour1: true, hour2: true, hour3: false, hour4: true, hour5: false, hour6: true, hour7: true, hour8: false, hour9: false}
    ]},
    {no: "B1.16", booked: false, time: [
        {hour1: true, hour2: true, hour3: false, hour4: true, hour5: false, hour6: false, hour7: true, hour8: true, hour9: true}
    ]},
    {no: "B1.17", booked: false, time: [
        {hour1: true, hour2: true, hour3: false, hour4: true, hour5: true, hour6: true, hour7: false, hour8: false, hour9: false}
    ]},
    {no: "B1.18", booked: false, time: [
        {hour1: true, hour2: false, hour3: false, hour4: true, hour5: true, hour6: true, hour7: false, hour8: false, hour9: false}
    ]},
    {no: "B1.19", booked: false, time: [
        {hour1: true, hour2: true, hour3: false, hour4: false, hour5: false, hour6: false, hour7: false, hour8: false, hour9: false}
    ]},

]

}
    
];
    
 })();    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
     
     
     
     
     
     
/*
var dates = [
     {nr: "101", 
      booked: false}, 
     {nr: "102", 
      booked: false}, 
     {nr: "103", 
      booked: false},
     {nr: "104", 
      booked: true},
     {nr: "105", 
      booked: false},
 ];




[

{ 
  id: "1" [
      {nr: "101",
       booked: true},
      {nr: "102",
       booked: true},
      {nr: "103",
       booked: false}
  ];
},
     
{
  id: "2" [
      {nr: "101",
       booked: true},
      {nr: "102",
       booked: false},
      {nr: "103",
       booked: true}
  ];
}
     
    ]; */
    
