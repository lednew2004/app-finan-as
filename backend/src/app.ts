import fastify from "fastify";
import { financesRoutes } from "./routes/financasRoutes";
import cors from "@fastify/cors";

export const app = fastify();

app.register(cors, {
    origin: "*"
});

app.register(financesRoutes, {
    prefix: "/financas"
});
