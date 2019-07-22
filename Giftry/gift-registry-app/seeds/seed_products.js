
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    // .then(function() {
    //   return knex('users').del();
    // })
    .then(function() {
      return knex('vendors').del();
    })
    .then(function () {
      // Inserts seed entries
      return knex('vendors').insert([
        {id: 1, businessName: 'bbStore', address: '25, Happy Road, Taiwai', contactPerson:'Peter Wong', email:'sales@bbstore.com', phone:'23748329'},
        {id: 2, businessName: 'Aeon', address: '3/F, MegaBox, Kln Bay', contactPerson:'Kate Lo', email:'sales@aeon.com', phone:'53828552'},
        {id: 3, businessName: 'Watsons', address: '405 Kennedy Road, Central', contactPerson:'Lizzy Mcquare', email:'sales@watsons.com', phone:'73844743'}
      ]);
    })
    // .then(function () {
    //   // Inserts seed entries
    //   return knex('users').insert([
    //     {id: 1, username: 'oliveevee', fName: 'Olivia', lName: 'Wong', password:'1234567'},
    //     {id: 2, username: 'happy@email.com', fName: 'Happy', lName: 'Person', password:'helloworld'},
    //     {id: 3, username: 'tsim@mail.hk', fName: 'Tully', lName: 'Simon', password:'0000'}
    //   ]);
    // })
    .then(function () {

      // Inserts seed entries
      return knex('products').insert([
        {id: 1, vendor_id: '1', productCat: 'Kimono Tops', description:'Dotted 3 in 1 pack', price: 25, ocassionTag: 'newborn'},
        {id: 2, vendor_id: '2', productCat: 'Kimono Tops', description:'Floral economic', price: 6, ocassionTag: 'newborn'},
        {id: 3, vendor_id: '1', productCat: 'Onesies', description:'Cute panda onsies', price: 30, ocassionTag: 'newborn'},
        {id: 4, vendor_id: '2', productCat: 'Onesies', price: 75, ocassionTag: 'newborn'},
        {id: 5, vendor_id: '1', productCat: 'swaddle blanket', price: 25, ocassionTag: 'newborn'},
        {id: 6, vendor_id: '2', productCat: 'stroller', description:'Combi lightweight', price: 2400, ocassionTag: 'newborn'},
        {id: 7, vendor_id: '1', productCat: 'stroller', description:'TranX compact', price: 1790, ocassionTag: 'newborn'},
        {id: 8, vendor_id: '2', productCat: 'diaper', description:'Pampers NB 50pc', price: 120, ocassionTag: 'newborn'},
        {id: 9, vendor_id: '3', productCat: 'diaper', description:'Merries NB 50pc', price: 99, ocassionTag: 'newborn'},
        {id: 10, vendor_id: '3', productCat: 'diaper', description:'Reusable diaper 6pc', price: 930, ocassionTag: 'newborn'},
        {id: 11, vendor_id: '1', productCat: 'pacifiers', price: 25, ocassionTag: 'newborn'},
        {id: 12, vendor_id: '3', productCat: 'pacifiers',  price: 25, ocassionTag: 'newborn'},
        {id: 13, vendor_id: '2', productCat: 'playmat', price: 900, ocassionTag: 'newborn'},
        {id: 14, vendor_id: '1', productCat: 'changing mat', price: 125, ocassionTag: 'newborn'},
        {id: 15, vendor_id: '2', productCat: 'changing mat', price: 200, ocassionTag: 'newborn'},
        {id: 16, vendor_id: '2', productCat: 'shampoo', description:'BearCare Natural 500ml', price: 80, ocassionTag: 'newborn'},
        {id: 17, vendor_id: '3', productCat: 'shampoo', description:'GentleBrand 750ml', price: 100, ocassionTag: 'newborn'},
        {id: 18, vendor_id: '3', productCat: 'lotion', description:'BearCare Natural 500ml', price: 50, ocassionTag: 'newborn'},
        {id: 19, vendor_id: '3', productCat: 'lotion', description:'BearCare Natural 500ml', price: 64, ocassionTag: 'newborn'},
        {id: 20, vendor_id: '1', productCat: 'nursing pillow', price: 180, ocassionTag: 'newborn'},
        {id: 21, vendor_id: '2', productCat: 'nursing pillow',price: 250, ocassionTag: 'newborn'},
        {id: 22, vendor_id: '1', productCat: 'burp cloth', description:'10 in 1 pack', price: 30, ocassionTag: 'newborn'},
        {id: 23, vendor_id: '2', productCat: 'burp cloth', description:'5 in 1 pack', price: 50, ocassionTag: 'newborn'},
        {id: 24, vendor_id: '2', productCat: 'crib', description:'baby3/0', price: 1240, ocassionTag: 'newborn'},
        {id: 25, vendor_id: '2', productCat: 'crib', description:'ClassicKids', price: 1699, ocassionTag: 'newborn'},
        {id: 26, vendor_id: '2', productCat: 'dresser', description:'3-drawers dresser', price: 1988, ocassionTag: 'newborn'},
        {id: 27, vendor_id: '1', productCat: 'dresser', description:'2-drawers dresser', price: 589, ocassionTag: 'newborn'},
        {id: 28, vendor_id: '1', productCat: 'baby wipes',  price: 25, ocassionTag: 'newborn'},
        {id: 29, vendor_id: '3', productCat: 'baby wipes', price: 52, ocassionTag: 'newborn'},
      ]);
    });
};
