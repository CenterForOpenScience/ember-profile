import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		save_upload() {
			const parent = Ember.$('#uploads-box');
			const file = Ember.$('#file').val();
			const file_name = Ember.$('#name').val();
			var empty_message = Ember.$('.empty-message');

      		Ember.$('#uploadModal').modal('hide');
      		if(empty_message !== ''){
      			Ember.$('.empty-message').empty();
      		}
      		var new_link = '<a href="'+ file +'"><h4 href="' + file + '" class="no-margins"><button class="btn btn-link"><i class="fa fa-cloud-upload fa-3x" /></button> ' + file_name +'</h4></a>';
      		parent.append(new_link);

      		Ember.$('#file').val('');
      		Ember.$('#name').val('');
    	}
	}
});
