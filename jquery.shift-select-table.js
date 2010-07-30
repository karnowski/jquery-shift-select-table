(function($){
  $.fn.shiftSelectTable = function(){
    this.find(":checkbox").change(function(){
      $(this).parents("tr").toggleClass("selected");
    });
    
    this.find(":checked").parents("tr").toggleClass("selected");
  };
})(jQuery);
