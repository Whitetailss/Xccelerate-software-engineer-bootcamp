
exports.up = function(knex, Promise) {
  return knex.schema.createTable('school_contact_info', function (table){
      table.integer('school_id');
      table.foreign('school_id').references( 'school_users.id');
      table.string('website');
      table.string('address');
      table.string('email');
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('school_contact_info',function(table){
      table.dropForeign('school_id')
  })
};
