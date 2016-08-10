import Ember from "ember";

export default Ember.Component.extend({
    elementId: 'about-uploads',
    actions: {
        saveUpload() {
            const file = this.$().find('#about-uploads-file');
            const fileName = this.$().find('#about-uploads-name');

            this.get('model').pushObject({
                name: fileName.val(),
                link: file.val()
            });

            file.val('');
            fileName.val('');
        }
    }
});
