import { Knex } from "knex";

declare module "knex/types/tables" {
    export interface Tables {
        historico: {
            id: string,
            title: string,
            valor: number,
            data: string
        }
    }
}