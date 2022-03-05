window.onclick = function(event) {
  if (!event.target.matches('#pkt_auth_dropdown_checkbox') && !event.target.matches('.pkt_auth_dropdown_list_item')) {
    var checkbox = document.querySelector("#pkt_auth_dropdown_checkbox");
    if (checkbox.checked=true) {
      checkbox.checked=false;
    }
  }
}