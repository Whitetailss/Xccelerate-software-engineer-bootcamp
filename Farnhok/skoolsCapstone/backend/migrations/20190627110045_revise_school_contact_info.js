
exports.up = function(knex, Promise) {
  return knex.schema.table('school_contact_info', function(table){
      table.string('contact_number');
      table.string('school_name')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('school_contact_info', function(table){
        table.dropColumn('contact_number', 'school_name');
    });
};
