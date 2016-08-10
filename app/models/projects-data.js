import DS from "ember-data";

export default DS.Model.extend({
    created: DS.attr('date'),
    modified: DS.attr('date'),
    registered: DS.attr('boolean'),
});
