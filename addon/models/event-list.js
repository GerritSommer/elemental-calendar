import Ember from 'ember';

export default Ember.Object.extend({
  events: null,

  forDay(day) {
    console.log(day);
  }
});
