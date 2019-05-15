import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr('string'),
  isDone: DS.attr('boolean', {defaultValue: false}),
});
