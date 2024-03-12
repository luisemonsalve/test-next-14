export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  return Response.json({
    api: "Works",
    params,
  });
}
