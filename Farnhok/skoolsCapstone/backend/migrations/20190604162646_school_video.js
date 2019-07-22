
exports.up = function(knex, Promise) {
    return knex.schema.createTable('school_video', function(table){
        table.increments('id');
        table.integer('school_id');
        table.foreign('school_id').references('school_users.id');
        table.string('video');
        table.boolean('is_posted');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('school_video', function(table){
        table.dropForeign('school_id');
    })
};
