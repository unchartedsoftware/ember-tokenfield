module.exports = {
    name: 'ember-tokenfield',

    isDevelopingAddon: function() {
        // TODO: Make false when released.
        return true;
    },

    normalizeEntityName: function() {},

    included: function(app) {
        this._super.included(app);
    }
};
