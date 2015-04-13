import Ember from 'ember';
import HoverActions from 'ui/mixins/hover-actions';

export default Ember.Component.extend(HoverActions,{
  model: null,
  classNames: ['pod','service','resource-action-hover'],
  classNameBindings: ['stateBorder'],

  actions: {
  },

  isActive: Ember.computed.equal('model.state','active'),
  isInactive: Ember.computed.equal('model.state','inactive'),
  showAdd: Ember.computed.alias('isActive'),

  stateBackground: function() {
    return this.get('model.stateColor').replace("text-","bg-");
  }.property('model.stateColor'),

  stateBorder: function() {
    return this.get('model.stateColor').replace("text-","border-top-");
  }.property('model.stateColor'),

  iconColor: function() {
    var color = this.get('model.stateColor');
    if ( color.indexOf('danger') >= 0 )
    {
      return color;
    }
  }.property('model.stateColor'),
});
