
exports.up = function(knex, Promise) {
    return knex.schema.createTable('review', function(table){
        table.increments('id');
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.integer('school_id');
        table.foreign('school_id').references('school_users.id');
        table.text('comment_content');
        table.integer('score_param_1');
        table.integer('score_param_2');
        table.integer('score_param_3');
        table.string('teaching_style');
        table.boolean('is_reported');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('review', function(table){
        table.dropForeign('user_id');
        table.dropForeign('school_id');
    })

};
