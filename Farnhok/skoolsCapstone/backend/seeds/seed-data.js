
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  // return knex('school_event').del()
  //   .then(function () {
  //     return knex('school_details').del()
  //   })
  //   .then(function () {
  //     return knex('users').del()
  //   })
  //   .then(function () {
  //     return knex('school_users').del()
  //   })
    // .then(function () {

      // Inserts seed entries
    //   return knex('school_users').insert([
    //     {id:1, username: 'hapSchool', password: '123'},
    //     {id:2, username: 'marketing', password: '321'}
    //   ])
    // })
    // .then(function () {
    //   return knex('users').insert([
    //     { email: 'a@b.com', password: '123', first_name: 'Oli', last_name: 'Wong' }
    //   ])
    // })
    // .then(function () {
      return knex('school_details').insert([
        { school_id: 1, school_name: 'Happy Kindergarten', location: 'Wong Tai Sin',  am_student: 50, pm_student: 60, half_day_tuition: 0, has_subsidy: true, subsidy_amt: 1800, has_am: true, has_pm: true, has_full_day: false, has_long_full_day: false, no_of_teacher: 40 },
        { school_id: 2, school_name: 'Everyday Kindergarten', location: 'Central', am_student: 48, pm_student: 46, full_day_student: 14, half_day_tuition: 1700, full_day_tuition: 5400, has_subsidy: true, subsidy_amt: 1500, has_am: true, has_pm: true, has_full_day: true, has_long_full_day: false, no_of_teacher: 38 }
      ])
    }
    // })
//     .then(function(){
//       return knex('school_contact_info').insert([
//         {school_id:1, address: '12 Rich Road',  email: 'admin@school.com'},
//         {school_id:2, address: '123 Happy Road', email: 'admin@yy.com' }
//       ])
//     })
//     .then(function () {
//       return knex('school_event').insert([
//         { school_id: 1, event_date: '2019-03-03', event_name: 'Open day', event_description: 'school tour and demo class', event_venue: 'Happy Kindergarten', is_free: true }
//       ])
//     })

// }


 