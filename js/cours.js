// function courFn(courName){
//   this.courName = courName;
// };
//
// courFn.prototype.deleteC = function(){
//   console.log(0);
//   $('#tabC').on('click',td,function(event){
//     event = event || window.event;
//     console.log(0+'---'+event.target);
//     event.target.parent().remove();
//   })
// }

$('#tabC').on('click','td',function(event){
    event = event || window.event;
    console.log(0+'---'+event.target);
    event.target.parent().remove();
})
