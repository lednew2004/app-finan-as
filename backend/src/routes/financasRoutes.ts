import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { number, string, z } from "zod";
import { randomUUID } from "node:crypto";

export async function financesRoutes(app: FastifyInstance) {
    app.get("/", async () => {
        const historico = await knex("historico").select();

        return { historico };
    });

    app.post("/", async (request, reply) => {
        const schemaBody = z.object({
            title: z.string(),
            valor: z.number(),
        });

        const { title, valor } = schemaBody.parse(request.body);

        await knex("historico").insert({
            id: randomUUID(),
            title,
            valor
        });
    });

    app.delete("/:id", async (request, reply) => {
        const schemaParam = z.object({
            id: string()
        });

        const { id } = schemaParam.parse(request.params);

        await knex("historico").where("id", id).del();

        return reply.status(204).send();
    })

};