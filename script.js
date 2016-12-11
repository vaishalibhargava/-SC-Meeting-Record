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

    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick=function(e) {
      if (!e.target.matches('.dropbtn')){

        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var d = 0; d < dropdowns.length; d++){
          var openDropdown = dropdowns[d];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
      </script>

    new Vue({
      el: "#app",
      data: {
        EventsDiscussion: [

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

         new Vue({
           el:'#app',
           data: {
             attend: 0
           },
           methods: {
             Increase: function(){
               this.attend +=1;
             },
             Decrease: function(){
               this.attend -=1;
             }
           }
         });
