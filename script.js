$(function(){
	$('input, textarea').on('keydown', function(){
		$(this).parent().removeClass("error-r");
		$(this).parent().removeClass("error-in");
    $(this).parent().removeClass("error-num");
	});

  $("button").on('click', function(){
    var goodjob = true;
	  var nameElm = $('.name');
		var name = nameElm.find('input').val();
		nameElm.removeClass('error-r');
		nameElm.removeClass('error-min');
		if(!name){
			nameElm.addClass('error-r');
      goodjob = false;
		}else if(name.length < 2){
			nameElm.addClass('error-min');
      goodjob = false;
		}

		var emailElm = $(".email");
		var email = emailElm.find('input').val();
		emailElm.removeClass('error-r');
		emailElm.removeClass('error-in');
		if(!email){
			emailElm.addClass('error-r');
      goodjob = false;
		}else if(!validateEmail(email)){
			emailElm.addClass('error-in');
      goodjob = false;
		}

		var messageElm = $(".message");
		var message = messageElm.find('textarea').val();
		messageElm.removeClass('error-r');
    messageElm.removeClass('error-min');
		if(!message){
			messageElm.addClass('error-r');
      goodjob = false;
		}else if(message.length < 10){
      messageElm.addClass('error-min');
      goodjob = false;
    }
    
    var markElm = $(".mark");
    var mark = markElm.find('input:checked').val();
    markElm.removeClass('error-r');
    if(!mark){
      markElm.addClass('error-r');
      goodjob = false;
    } 
  
    
    if (goodjob) {
      var nazvElm = $('<h5>');
      var commentElm = $('<p>');
      var totalElm = $('<div>');

      nazvElm.text(name);
      commentElm.text(message);

      nazvElm.appendTo(totalElm);
      commentElm.appendTo(totalElm);

      var list = $('.comments-list');
      totalElm.appendTo(list);

      emailElm.find('input').val('');
      nameElm.find('input').val('');
      $('textarea').val('');
      $('input[type=radio]').attr('checked',false);
    };
    
    if (mark == 'great'){
      totalElm.addClass('cool')
    };
	});
});
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}