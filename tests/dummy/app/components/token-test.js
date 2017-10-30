import Ember from 'ember';
import Component from '@ember/component';
import layout from '../templates/components/token-test';

export default Component.extend({

    layout,

    init() {
        this._super(...arguments);

        this.set('tokens', Ember.A());
    }

});
