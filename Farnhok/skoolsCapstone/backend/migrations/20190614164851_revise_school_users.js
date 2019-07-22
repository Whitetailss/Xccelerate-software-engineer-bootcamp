
exports.up = function(knex, Promise) {
    return knex.schema.table('school_users', function(table){
        table.dropColumns('profile_pic','contact_email','school_name', 'phone','address','location','website')
      
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('school_users', function(table){
        table.string('profile_pic');
        table.string('school_name', 255);
        table.string('address', 255);
        table.string('location', 255);
        table.string('website', 255);
        table.string('phone', 255);
        table.string('contact_email', 255)
    })
};
