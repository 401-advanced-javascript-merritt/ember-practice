import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
      { title: 'Feed John' },
      { title: 'Feed Aaron' },
      { title: 'Feed Chris' },
      { title: 'Feed Joseph' },
      { title: 'Feed Vanessa' },
  
    ]
  }
});
