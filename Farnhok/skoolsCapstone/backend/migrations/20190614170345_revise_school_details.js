
exports.up = function (knex, Promise) {
    return knex.schema.table('school_details', function (table) {
        table.string('profile_pic');
        table.string('school_name', 255);
        table.string('location', 255);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('school_details', function (table) {
        table.dropColumns('location','school_name','profile_pic');
    })
};
