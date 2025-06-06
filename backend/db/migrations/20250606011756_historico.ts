import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("historico", (table) => {
        table.uuid("id").primary()
        table.text("title").notNullable()
        table.decimal("valor", 10, 2).notNullable();
        table.timestamp("data").defaultTo(knex.fn.now()).notNullable();

    }).then(() => { console.log("Tabela criada") });
};

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("historico");
};

