
exports.up = function (knex, Promise) {
    return knex.schema.table('school_details', function (table) {
        table.dropColumns('id', 'half_day_tuition');
        table.string('am_tuition');
        table.string('pm_tuition');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('school_details', function (table) {
        table.increments('id').primary();
        table.dropColumns('am_tuition','pm_tuition');
        table.string('half_day_tuition');
        
    })
};
