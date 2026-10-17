export async function onRequestGet(context) {
  try {
    // context.env.DB acessa o banco que vinculamos no painel da Cloudflare
    // O método .prepare() monta a query e o .all() traz todos os resultados
    const { results } = await context.env.DB.prepare("SELECT * FROM posts ORDER BY id DESC").all();

    return new Response(JSON.stringify(results), {
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    });
  } catch (erro) {
    return new Response(JSON.stringify({ erro: "Falha ao consultar o banco de dados." }), { 
      status: 500,
      headers: { "Content-Type": "application/json;charset=utf-8" }
    });
  }
}
