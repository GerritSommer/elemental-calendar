import Ember from 'ember';
import Month from 'el-calendar/models/month';
import Week from 'el-calendar/models/week';

let Day = Ember.Object.extend({
  dayName: null,
  events: null,
  date: null,

  _momentDate: Ember.computed('date', function() {
    return moment(this.date, 'YYYY-MM-DD');
  }),

  init() {
    this._super(...arguments);
    this.events = this.events || Ember.A();
  },

  previous(events) {
    if (this.date) {
      return Day.create({ date: this.get('_momentDate').subtract(1, 'days'), events: events });
    }
  },

  next(events) {
    if (this.date) {
      return Day.create({ date: this.get('_momentDate').add(1, 'days'), events: events });
    }
  },

  week(events) {
    if (this.date) {
      return Week.create({ date: this.date, events: events });
    }
  },

  month(events) {
    if (this.date) {
      return Month.create({ date: this.date, events: events });
    }
  }
});

export default Day;
