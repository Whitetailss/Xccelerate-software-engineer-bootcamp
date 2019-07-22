
exports.up = function(knex, Promise) {
    return knex.schema.createTable('school_details', function(table){
        table.increments('id').unsigned().primary();
        table.integer('school_id').unsigned();
        table.foreign('school_id').references('school_users.id');
        table.integer('am_student');
        table.integer('pm_student');
        table.integer('full_day_student');
        table.integer('long_full_day_student');
        table.integer('half_day_tuition');
        table.integer('full_day_tuition');
        table.integer('long_full_day_tuition');
        table.boolean('has_subsidy');
        table.integer('subsidy_amt');
        table.boolean('has_am');
        table.boolean('has_pm');
        table.boolean('has_full_day');
        table.boolean('has_long_full_day');
        table.integer('no_of_teacher');
        table.timestamps(true,true)

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('school_details', function(table){
        table.dropForeign('school_id');
    })

};
