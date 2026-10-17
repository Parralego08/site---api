export async function onRequestGet(context) {
  const dados = [
    { id: 1, titulo: "Entendendo APIs", resumo: "Como o Front-end e o Back-end conversam." },
    { id: 2, titulo: "Cloudflare Pages", resumo: "Hospedagem rápida e distribuída globalmente." },
    { id: 3, titulo: "Vaga de Estágio", resumo: "Projetos práticos mostram que você sabe codar de verdade." }
  ];

  return new Response(JSON.stringify(dados), {
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
}
