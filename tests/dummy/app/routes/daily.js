import { A } from '@ember/array';
import { Promise as EmberPromise } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return new EmberPromise(function(resolve) {
      resolve({
        date: params.day_date,
        events: A([
          { name: 'Meeting with Joe', startDate: '2015-06-25T14:30', endDate: '2015-06-25T15:30' },
          { name: 'Coffee with Susan', startDate: '2015-06-27T16:00', endDate: '2015-06-27T16:30' },
          { name: 'Breakfast with Geico', startDate: '2015-06-28T08:30', endDate: '2015-06-28T09:30' },
          { name: 'Taxes due', startDate: '2015-06-12T00:00', endDate: '2015-06-12T01:00' }
        ])
      });
    });
  }
});
