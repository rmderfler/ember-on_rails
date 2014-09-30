Blogger.ApplicationSerializer = DS.RESTSerializer.extend({
  keyForRelationship: function(key, relationship) {
    if (relationship === 'belongsTo') {
      return key + '_id';
    }
  }
});
