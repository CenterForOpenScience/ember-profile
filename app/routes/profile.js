import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: 'John Doe',
      location: 'Charlottesville, VA',
      profession: 'Developer'
    };
  },
  actions: {
  	toggle: function(){
		$('.inactive-edit, .active-edit').toggle();
		$('main').fadeTo('fast',0.3);
		$('.profile-content span').each(function(){ 
			if($(this).find('input').length){
                $(this).text($(this).find('input').val());
            } else if($(this).find('textarea').length){
            	$(this).text($(this).find('textarea').val());
            } else {
                var t = $(this).text();
                if($(this).attr('id') == 'bio-text'){
                	$(this).text('').append($('<textarea class="form-control" />',{'value' : t}).val(t));
                }else{
                	 $(this).text('').append($('<input class="form-control" />',{'value' : t}).val(t));

                }
            }
        });
		$('main').fadeTo('fast',1.0);
  	}
  }
});
