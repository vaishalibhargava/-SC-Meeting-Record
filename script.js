function myFunction() {
  var x=
  document.getElementById("myDropdown").classlist.toggle("show");
}
window.onclick=function(e) {
  if (!e.target.matches('.dropbtn')){

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length;d++){
      var openDropDown = dropdowns[d];
      if(openDropDown.classlist.contains('show')) {
        openDropDown.classlist.remove('show');
      }
    }

    new Vue({
      el: "#app",
      data: {
        EventsDiscussion: [
                  "Food Plate Ban",
                  "Cultural Meet",
                ],
                Discuss:""
              },
              methods: {
                addDiscuss: function(){
                  this.EventsDiscussion.push(this.Discuss);
                  this.Discuss="";
                },
              removeDiscuss: function(){

                this.legends.pop(this.legend);
              }
            }
         })
