import Route from '@ember/routing/route';
import Idea from 'idea-box/models/ideas';

export default Route.extend({
  model() {
    return [
      {
        id:1,
        title: 'Genius',
        body: 'This the greatest idea you have ever heard'
      },
      {
        id:2,
        title: 'Pretty ok Idea',
        body: 'This idea is ok'
      },
      {
        id:3,
        title: 'Mediocre at Best Idea',
        body: 'Have had better ideas than this one'
      },
      {
        id:4,
        title: 'Garbage',
        body: 'This idea is rubbish'
      },
    ]
  },

  actions: {
    createIdea() {
      var title = this.get('controller').get('title');
      var body = this.get('controller').get('body')
      var idea = Idea.create({title: title, body: body});
      this.modelFor('ideas').pushObject(idea);
      this.get('controller').set('title', '');
      this.get('controller').set('body', '')
    }
  }
});
