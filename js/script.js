function ch(){
  var sm = 0, vl = 0, ct, pr;
      
  $.each( $('#usr-table-order td.usr-cnt'), function () {
    ct = $(this).find('input[type=number]');
    pr = ct.parent().next("td") ;
    vl += parseInt(ct.val()) * parseInt(pr.html());
  });
  $('#usr-your-order').html(vl);
 
  sm = parseInt($('#usr-your-order').html()) + parseInt($('#usr_your_delvr').html());
 
  $('#usr-your-summo').html(sm);
  crtcnt();
}
    
$('input[type=number]').bind( 'change', function(){ ch(); });
      
$('#usr-btn-del').bind( 'click', function(){
  var cn = 0, i = 1;
  $.each( $('#usr-table-order input[type=checkbox]:checked'), function () {
    $(this).parent().parent().remove();
    ch();
  });
  $.each( $('#usr-table-order .usr-nmbr-item'), function () {
    $(this).html(i);
    i++;
  });
  crtcnt();
});


/*crtcnt - Cart Count - количество в корзине.*/
function crtcnt () {
  var cn = 0, cr = 0, cartCnt = $('#usr-cart-cnt');
  if ( $('.usr-nmbr-item').size() == 0 ) $('#usr-cart').find('small').remove();
  else cr = parseInt( cartCnt.html() );
  //cn = $('#usr-table-order .usr-cnt').size();
  $.each( $('#usr-table-order .usr-cnt'), function () {
    var t = 0;
    t = $(this).find('input').val();
    cn += parseInt( t );
  });
  if ( cn ) {
    
    cartCnt.html( cn );
  }
  else if ( cr ) cartCnt.html( cr + 1 );
}