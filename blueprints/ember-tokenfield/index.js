module.exports = {
    name: 'ember-tokenfield',

    isDevelopingAddon: function() {
        return false;
    },

    normalizeEntityName: function() {},

    included: function(app) {
        this._super.included(app);
    }
};
