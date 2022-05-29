# Films List

Aplicativo para assistir filmes com determinada prioridade, onde é possivel escolher filmes ou séries desejada e fazer uma lista com cada um tendo suas prioridades para assistir. Ex: Prioridade alta, Prioridade Média e Prioridade baixa.

### Principais Funcionalidades
 * Campo de busca de filmes e séries
 * Listagem de filmes e séries
 * Avaliação do IMDb do filme ou série
 * Categorias de prioridades para assistir um filme
 * Controlar filmes por uma lista ordenada com prioridade dos filmes que foi denominado

## Protótipos de tela

https://www.figma.com/file/AtefxQYpRpXHh9CYFaG6wt/Films-List?node-id=0%3A1

## Backlog
1. Desde a AA1 foi finalizadas as telas do app. Foi aplicado as FlatList que foi sugerido no feedback.
2. As informações são armazenadas em uma API criada por mim feita em C# ASP.Net Core, onde foi criada as validações de dados no back-end.

Um exemplo de model/DTO de dados que estão sendo trafegados:

<code>
{
    "title": "Jaws",
    "description": "When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.",
    "imdbId": "tt0073196",
    "score": 13,
    "trailer": "http://youtube.com/watch?v=U1fu_sA7XhE",
    "poster": "https://image.tmdb.org/t/p/original/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//3nYlM34QhzdtAvWRV5bN4nLtnTc.jpg",
    "priorityLevel": 1
  }
</code> 

3. Na aplicação foi utilizado o axios para consumir a API, onde existem requisições GET, POST e futuramente DELETE.
4. Foi usado na aplicação Alerts na Page InspectMovie, e será utilizado no futuro Modal em FindMovie e List.

## API's utilizadas
* https://films-list.azurewebsites.net
* https://rapidapi.com/linaspurinis/api/mdblist/ (utilizada no back-end) *Obs: Esta API tem limitações de 100 requisições diárias com intervalo de 1 segundo a cada requisição.

### Recurso Inédito (Opinião sobre matéria de PDM)
* Acredito que o uso de Typescript seria um conteúdo bem interessante de ser abordado no curso desde o inicio da disciplina.
* Em relação ao conteúdo atual, acredito que está bem completo com aulas ao vivo criando os códigos em tempo real com os recursos mais usados hoje em dia com o React Native.

## Cronograma
1. Criar visual do projeto completo, finalizado em 12/05
2. React navigation, finalizado em 28/04
3. Consumir API, até dia 05/06
4. Aplicar Modais, até dia 10/06
5. Finalizar projeto até dia 15/06