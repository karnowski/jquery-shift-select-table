(function($){
  function toggleSelected(element, shouldSelect) {
    $(element).attr("checked", shouldSelect);
    $(element).parents("tr").toggleClass("selected", shouldSelect);
  }
  
  $.fn.shiftSelectTable = function(){
    var $table = $(this);
    
    $table.find(":checkbox").click(function(event){
      var last = $table.data("jquery-shift-select-table.last");
      $table.data("jquery-shift-select-table.last", $(this).get());
      
      if(last == null || !event.shiftKey) {
        $(this).parents("tr").toggleClass("selected");
      }
      else {
        var shouldSelect = $(this).attr("checked");
        var $checkboxes = $table.find(":checkbox");
        var currentIndex = $checkboxes.index(this);
        var lastIndex = $checkboxes.index($(last));
        var $checkboxesToChange = (currentIndex >= lastIndex) ? $checkboxes.slice(lastIndex, currentIndex+1) : $checkboxes.slice(currentIndex, lastIndex+1);
        
        $checkboxesToChange.each(function(){
          toggleSelected(this, shouldSelect);
        });
      }
    });
    
    this.find(":checked").parents("tr").toggleClass("selected");

    return this;
  };
})(jQuery);

/*
  if unchecking --> all from current to last should UNCHECK
  if checking --> all from current to last should CHECK
*/