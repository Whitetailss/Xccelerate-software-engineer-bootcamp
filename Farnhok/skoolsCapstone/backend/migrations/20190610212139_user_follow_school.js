
exports.up = function(knex, Promise) {
   return knex.schema.createTable('user_follow_school', function(table){
       table.increments('id');
       table.integer('school_id');
       table.foreign('school_id').references('school_users.id');
       table.integer('user_id').references('users.id');
       table.boolean('notification_off')
       table.timestamps(true,true);
   })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_follow_school', function(table){
        table.dropForeign('school_id');
        table.dropForeign('user_id');     
    })
  
};
