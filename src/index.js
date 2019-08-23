$(document).ready(function() {
  var target = document.getElementById("example");
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log(mutation);
    });
  });

  // configuration of the observer:
  var config = {
    attributes: true,
    childList: true,
    characterData: true
  };
  $("#change").on("click", function(e) {
    $("#example").attr("disabled", "disabled");
  });
  // pass in the target node, as well as the observer options
  observer.observe(target, config);
});
