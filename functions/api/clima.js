export async function onRequestGet(context) {
    // Pega o nome da cidade pela URL (ex: /api/clima?cidade=Londres) ou usa Curitiba como padrão
    const url = new URL(context.request.url);
    const cidade = url.searchParams.get('cidade') || 'Curitiba';
    
    // Resgata a chave da OpenWeather configurada no painel da Cloudflare
    const apiKey = context.env.OPENWEATHER_API_KEY;

    // URL da OpenWeather configurada para o sistema métrico (Celsius) e em português
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const resposta = await fetch(endpoint);
        const dados = await resposta.json();

        return new Response(JSON.stringify(dados), {
            headers: { "Content-Type": "application/json;charset=utf-8" }
        });
    } catch (erro) {
        return new Response(JSON.stringify({ erro: "Falha ao conectar com a OpenWeather" }), { 
            status: 500,
            headers: { "Content-Type": "application/json;charset=utf-8" }
        });
    }
}
