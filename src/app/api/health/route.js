export async function GET(req) {
  console.log("health check");
  return new Response("ok");
}
