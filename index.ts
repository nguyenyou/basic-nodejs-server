Bun.serve({
  fetch(req) {
    return new Response("Bun!");
  },
  port: 3000,
});
