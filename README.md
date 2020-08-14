# Desafio Front-End da Indra

Esse é um teste de nivelamento. Queremos deixar claro que não é esperado que todos consigam realizá-lo por completo, já que é destinado a varios níveis de experiência. Esperamos que todas as pessoas que queiram trabalhar conosco tentem realizá-lo e submetam mesmo não tendo concluído todo o desafio. Esperamos que você crie um arquivo README na raiz do projeto falando sobre o desenvolvimento do desafio.

Focamos aqui em design de código e design patterns em TypeScript com e principalmente criatividade em resolução de problemas. O objetivo é avaliar sua experiência em escrever código de fácil manutenção, baixo acoplamento e alta coesão.

A Indra trabalha com feedbacks construtivos, e, portando, entraremos em contato e vamos enviar um retorno do teste enviado. Faremos questão de falar seus pontos fortes e os pontos a melhorar. Então, aproveite essa oportunidade.

## Principais responsabilidades que buscamos

- Boa comunicação e clareza com os clientes e funcionários da empresa;
- Estar disposto a aprender e a ensinar;
- Estar sempre atento a oportunidades para melhorar o código e nossos processos.

## Requisitos e Skills

- Experiência com TypeScript (ES6);
- HTML5 e CSS3;
- Angular 8+;
- Clean Code;
- Conhecer versionamento com Git.

## Diferenciais

- Testes (Jasmine, Karma);
- Conhecer o DevTools do Chrome (Debug, Networking, Sources);
- Conhecer Gitlab e/ou Jira.

## Enredo

Temos uma API que importa dados de um arquivo CSV e os salva num banco de dados. A API também fornece endpoints, para obter alguns desses dados e cadastrar outros. Precisamos que o front-end dessa aplicação seja construído com o framwework Angular.

## Problema

### Informações importantes

- Não será mais necessário importar os dados do arquivo CSV. Os dados já estão salvos no banco de dados da aplicação;
- A URL base da aplicação é: https://combustivelapp.herokuapp.com (não há nada mapeado na raiz);
- A documentação da API está disponível em https://combustivelapp.herokuapp.com/swagger-ui.html, nela contém os endpoints necessários para resolução desse teste, consulte e indentifique a melhor forma de fazer as requisições;
- Fica ao seu critério como construir a sua UI, mas estaremos atentos ao design criado e estilos também;
- Reforçamos que você invista em uma UI limpa, fluída e bonita. Você pode utilizar algum pré-processador para te auxiliar nisso;
- O ideal é que nas listagens, não sejam exibidos todos os dados de uma só vez (Infinite Scroll ou paginação podem te ajudar);
- Experamos que você escreva no README do seu projeto os problemas que passou e como decidiu resolve-los. Caso tenha ficado algum ponto do teste em aberto, o motivo de não ter feito e como esperava ter resolvido também seria ótimo nesse arquivo;

### Itens obrigatórios

- Implementar interface para CRUD de usuários
- Implementar recurso para CRUD de histórico de preço de combustível
- Implementar interface que retorne a média de preço de combustível com base no nome do município
- Implementar interface que retorne todas as informações importadas por sigla da região
- Implementar interface que retorne os dados agrupados por distribuidora
- Implementar interface que retorne os dados agrupados pela data da coleta
- Implementar interface que retorne o valor médio do valor da compra e do valor da venda por município
- Implementar interface que retorne o valor médio do valor da compra e do valor da venda por bandeira


### Itens desejáveis

- Testes unitários
- Utilizar Bootstrap ou Materialize
- Responsividade
- UI/UX

### Instruções

- Faça o fork desse repositório;
- Crie uma branch chamada 'desafio_angular_nome_candidato', substituindo 'nome_candidato' por seu nome;
- Desenvolva e lembre-se que o prazo final é até o dia 17/08/2020;
- Após concluir faça um push do seu código pra a sua branch remota;
- Solicite o Merge request para o repositório original e boa sorte!