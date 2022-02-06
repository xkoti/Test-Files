$(".marquee").each(function() {
  if($(this).prop('scrollWidth') > $(this).parent().width())
    $(this).wrap('<marquee onmouseover="this.stop();" onmouseout="this.start();" scrollamount="3"></marquee>')
});
