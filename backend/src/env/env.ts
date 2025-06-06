import { z } from "zod";
import { configDotenv } from "dotenv";
configDotenv();

const schemaEnv = z.object({
    DATABASE_CLIENT: z.enum(["sqlite", "pg"]),
    DATABASE_URL: z.string(),
    PORT: z.coerce.number().default(3333)
});

const _env = schemaEnv.safeParse(process.env);

if (_env.success === false) {
    console.error("Variavel de ambiente invalida", _env.error.format);

    throw new Error("Variavel de ambiente invalida");
};

export const env = _env.data;