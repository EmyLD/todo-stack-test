import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("todos", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.boolean("completed").defaultTo(false);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists("todos");
}
