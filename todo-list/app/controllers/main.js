import Controller from '@ember/controller';
import DS from 'ember-data';
const { Model } = DS;

export default Controller.extend({
  actions: {
    addItem(model, data) {
      console.log('model:', model);
      console.log('data:', data);
      const newTask = this.store.createRecord('task', { title: data });
      console.log('newTask:', newTask);
      // newTask.save();
      // this.set
      /*
      console.log(this);
      model.set('title', data);
      console.log(task);
      // task.push({ title: data });
      // task.set('title', data);
      // task.save();
      // task.save();
      // task.save();

      //      Model.save('task', {
      //      title: data,
      //  });
      */
      console.log(data);
    },
  },
});
