import Ember from 'ember';

export default Ember.Component.extend({
    //Component properties
    classNames: ['token'],
    classNameBindings: ['isSelected:selected-token'],

    // Properties
    token: null,
    index: null,
    selectedTokenIndex: null,

    // State
    isSelected: Ember.computed('index', 'selectedTokenIndex', function() {
        return this.get('index') === this.get('selectedTokenIndex');
    }),

    // Actions
    actions: {
        removeToken() {
            this.removeToken();
        }
    }
});
