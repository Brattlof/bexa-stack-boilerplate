// pages/api/[...slugs].ts
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import swagger from "@elysiajs/swagger";

import { indexController } from "./_routes/index";

const app = new Elysia({ prefix: "/api" })
  .use(html())
  .use(swagger())
  .use(indexController);

const handle = ({ request }: { request: Request }) => app.handle(request);

export const GET = handle;
export const POST = handle;
