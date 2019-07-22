
exports.up = function(knex, Promise) {
   return knex.schema.table('school_photo', function(table){
       table.string('photo_category');
       table.string('caption');
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('school_photo', function(table){
    table.dropColumns('photo_category','caption');
  })
};
