function myFunction() {
  var x=
  document.getElementById("myDropdown").classlist.toggle("show"););
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

  }
