exports.up = async (knex) => {
  await knex.schema.createTable('appointments', function (table) {
    table.increments('id');
    table
      .string('groomer_id')
      // forces integer to be positive
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('profiles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('pet_id')
      // forces integer to be positive
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('customer_pets')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('location_service_id')
      // forces integer to be positive
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('location_services')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.string('service_provider_name').notNullable();
    table.date('appointment_date').notNullable();
    table.string('appointment_time').notNullable();
    table.enu('status', ['Pending', 'Cancel', 'Done']).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('appointments');
};
