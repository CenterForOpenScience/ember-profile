import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['editable'],
  didRender() {
    const form = this.$().find('form');
    form.submit((e) => {
      e.preventDefault();
    });
    if (this.get('area')) {
      form.find('textarea').keydown((event) => {
        if (event.keyCode === 13 && !event.shiftKey) {
          form.submit();
          return false;
        }
      }).blur(() => {
        form.submit();
      });
    } else {
      form.find('input').blur(() => {
        form.submit();
      });
    }
  },
  actions: {
    startEditing() {
      if (!this.get('isEditing')) {
        this.set('isEditing', true);
        this.set('previousText', this.$().find('span').text().trim());
      }
    },
    submit() {
      if (this.get('isEditing')) {
        this.set('isEditing', false);
        this.set('text', this.get('text').trim());
	      if (this.get('callback')) {
          this.get('callback')(this.get('name'), this.get('text'));
        }
      }
    },
    cancel() {
      if (this.get('isEditing')) {
        this.set('isEditing', false);
        this.set('text', this.get('previousText'));
      }
    }
  }
});
