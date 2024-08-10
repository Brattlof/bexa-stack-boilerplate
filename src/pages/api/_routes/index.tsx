import { Elysia } from "elysia";
import { Html } from "@elysiajs/html";

export const indexController = new Elysia().get("/", () => {
  const table = ["Hello", "from", "the", "API!"];

  return (
    <>
      {table.map((str) => {
        let randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        return (
          <h2 class="text-xl mr-2" style={`color: ${randomColor}`}>
            {str}
          </h2>
        );
      })}
    </>
  );
});
