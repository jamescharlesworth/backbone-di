define(['jquery',
        'backbone',
        'text!modules/task/taskForm.html'
        ], function( $, Backbone, taskFormHtml) {

  var OneViewA = Backbone.View.extend({
    
    initialize: function(options) {
      _.bindAll(this, 'render', 'addTask');
      var self = this;
      Backbone.dataStore.lookup(['collections/TaskCollection']).done(function( taskCollection ){
        self.collection = taskCollection;
        self.renderReady();
      });

    },
    events: {
      'submit form': 'addTask'
    },
    render: function(){
      return this;
    },
    renderReady: function(){
      this.$el.html(taskFormHtml);
      return this;
    },
    addTask: function(e) {
      e.preventDefault();
      var task = $('#task', this.$el).val();
      this.collection.add({name: task});
    }
  });

  return OneViewA;
});