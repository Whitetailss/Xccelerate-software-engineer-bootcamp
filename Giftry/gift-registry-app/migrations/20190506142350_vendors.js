
exports.up = function(knex, Promise) {
    return knex.schema.createTable('vendors',(table)=>{
        table.increments('id');
        table.string('businessName');
        table.string('address');
        table.string('contactPerson');
        table.string('email');
        table.string('phone');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('vendors');
};
