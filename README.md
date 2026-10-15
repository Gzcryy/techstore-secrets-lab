# TechStore Secrets Lab

Laboratório prático de **Gerenciamento de Segredos em DevOps**.

Este projeto simula uma aplicação simplificada da TechStore, contendo uma API, configurações de banco de dados, rotina de backup e ambiente Docker.

O projeto foi desenvolvido propositalmente com diferentes problemas relacionados ao gerenciamento de informações sensíveis.

---

## 🎯 Objetivo

O objetivo desta atividade é analisar um projeto existente, identificar problemas relacionados ao gerenciamento de segredos e aplicar correções utilizando boas práticas de segurança.

Durante a atividade, você deverá analisar o código-fonte, arquivos de configuração e arquivos relacionados à infraestrutura.

A proposta não é apenas encontrar problemas, mas compreender:

- onde um segredo pode ser exposto;
- como ele pode ser armazenado de forma inadequada;
- como pode ser acessado indevidamente;
- como pode ser exposto durante a execução;
- como evitar que informações sensíveis sejam versionadas;
- como aplicar o princípio do menor privilégio;
- como separar configuração de código;
- como reduzir a superfície de exposição de credenciais.

---

## 🧩 Contexto

A **TechStore** é uma aplicação fictícia de comércio eletrônico.

O projeto possui componentes que representam situações comuns encontradas em aplicações modernas:

- aplicação Node.js;
- configurações de banco de dados;
- credenciais de serviços externos;
- tokens de comunicação interna;
- arquivos de configuração;
- variáveis de ambiente;
- rotina de backup;
- ambiente Docker Compose.

A aplicação é propositalmente simples para que o foco da atividade esteja na **análise de segurança e no gerenciamento de segredos**.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- npm
- dotenv
- Docker
- Docker Compose
- MySQL

---

## 📁 Estrutura do projeto

    techstore-secrets-lab/
    │
    ├── src/
    │   ├── app.js
    │   ├── config.js
    │   └── database.js
    │
    ├── config/
    │   └── credentials.json
    │
    ├── scripts/
    │   └── backup.js
    │
    ├── .env
    ├── .gitignore
    ├── docker-compose.yml
    ├── package.json
    └── README.md

Analise todos os arquivos do projeto.

Nem todos os problemas estão necessariamente no código principal da aplicação.

---

# 🚀 Execução do projeto

## 1. Pré-requisitos

Antes de iniciar, certifique-se de possuir:

- Node.js instalado;
- npm instalado;
- Docker instalado;
- Docker Compose disponível.

Verifique:

    node --version
    npm --version
    docker --version
    docker compose version

---

## 2. Instalar as dependências

Na raiz do projeto:

    npm install

---

## 3. Executar a aplicação

Execute:

    npm start

A aplicação deverá iniciar na porta:

    3000

Acesse:

    http://localhost:3000

---

## 4. Testar a aplicação

### Página principal

    http://localhost:3000/

### Health Check

    http://localhost:3000/health

### Configuração

    http://localhost:3000/config-check

Observe cuidadosamente as respostas apresentadas pela aplicação.

---

# 🐳 Execução com Docker Compose

O projeto também possui uma configuração para execução utilizando Docker Compose.

Execute:

    docker compose up -d

Verifique os serviços:

    docker compose ps

Para visualizar os logs:

    docker compose logs

Para interromper os serviços:

    docker compose down

---

# 🔎 Desafio

Você recebeu este projeto como parte de uma revisão de segurança.

A aplicação funciona, porém existem **problemas propositalmente inseridos relacionados ao gerenciamento de segredos**.

Sua missão é realizar uma análise do projeto e identificar esses problemas.

### Você deverá:

1. analisar todos os arquivos;
2. identificar informações sensíveis;
3. identificar formas inadequadas de armazenamento;
4. identificar possíveis exposições;
5. verificar configurações de acesso;
6. corrigir os problemas encontrados;
7. aplicar boas práticas de gerenciamento de segredos;
8. documentar as alterações realizadas.

---

# 📋 Entregáveis

Ao finalizar a atividade, seu repositório deverá conter:

## 1. Projeto corrigido

O código deverá estar funcionando após as alterações.

---

## 2. README atualizado

Além deste README, documente:

- problemas encontrados;
- correções realizadas;
- boas práticas utilizadas;
- decisões técnicas;
- estratégia utilizada para gerenciamento das informações sensíveis.

---

## 3. Relatório de análise

Crie um arquivo:

    SECURITY.md

Nele, registre cada problema identificado.

Utilize o seguinte modelo:

    ## Problema 1

    ### Local

    Arquivo ou componente onde o problema foi encontrado.

    ### Problema identificado

    Descrição do problema.

    ### Risco

    Explique qual poderia ser o impacto de segurança.

    ### Correção aplicada

    Explique como o problema foi corrigido.

    ### Justificativa

    Explique por que a solução adotada é mais segura.

Repita o modelo para todos os problemas encontrados.

---

# 🧪 Validação

Depois das correções:

1. instale novamente as dependências;
2. execute a aplicação;
3. execute os endpoints disponíveis;
4. execute o Docker Compose;
5. verifique os logs;
6. confirme que a aplicação continua funcionando;
7. verifique se informações sensíveis não estão mais sendo expostas.

Uma correção de segurança não deve simplesmente fazer a aplicação parar de funcionar.

---

# 📌 Git

Antes de finalizar, verifique o histórico e os arquivos que serão enviados para o repositório.

Execute:

    git status

Depois:

    git diff

Verifique cuidadosamente se nenhuma informação sensível está sendo preparada para commit.

---

# 📝 Checklist final

Antes de entregar, confirme:

- [ ] Analisei todos os arquivos do projeto.
- [ ] Identifiquei os problemas de segurança.
- [ ] Corrigi os problemas encontrados.
- [ ] A aplicação continua funcionando.
- [ ] Testei os endpoints.
- [ ] Testei o Docker Compose.
- [ ] Revisei os logs.
- [ ] Revisei o `git status`.
- [ ] Revisei o `git diff`.
- [ ] Não estou versionando informações sensíveis.
- [ ] Criei o `SECURITY.md`.
- [ ] Documentei as decisões tomadas.
- [ ] Expliquei como as credenciais devem ser gerenciadas.
- [ ] Considerei rotação e revogação de credenciais.

---

# 🎓 Critério principal da atividade

A atividade não será avaliada apenas pela remoção de informações sensíveis.

Você deverá demonstrar que compreendeu:

> **Onde um segredo pode aparecer, por que isso representa um risco e como gerenciá-lo de forma segura durante seu ciclo de vida.**

Uma solução será considerada adequada quando, além de corrigir o problema, apresentar uma justificativa técnica coerente.

---

# ⚠️ Importante

Este projeto é **exclusivamente educacional**.

Todas as credenciais, tokens, chaves e informações sensíveis presentes no projeto são fictícias e não devem ser utilizadas em ambientes reais.

Nunca utilize credenciais reais durante a realização desta atividade.

---

# 👨‍🏫 Orientação da atividade

O repositório foi preparado propositalmente com problemas de segurança para que a análise seja realizada pelos alunos.

O README orienta a investigação **sem revelar previamente quais são os problemas existentes**.

A avaliação será baseada na capacidade de:

- identificar os problemas;
- compreender os riscos;
- aplicar as correções;
- validar o funcionamento da aplicação;
- justificar tecnicamente as decisões tomadas;
- documentar as alterações realizadas.

A atividade possui **10 problemas principais**, permitindo uma avaliação objetiva de:

**10 problemas identificados e corrigidos = 10 pontos.**

O arquivo `SECURITY.md` deverá ser utilizado para verificar não apenas se o aluno encontrou os problemas, mas também se compreendeu **por que cada correção foi necessária e qual risco estava sendo tratado**.

---

# 📚 Resultado esperado

Ao final da atividade, o repositório deverá representar uma versão mais segura da aplicação, com:

- menor exposição de credenciais;
- melhor separação entre código e configuração;
- aplicação do princípio do menor privilégio;
- proteção adequada de arquivos sensíveis;
- redução de informações confidenciais em logs;
- melhores práticas para utilização de Docker e Docker Compose;
- documentação das decisões de segurança;
- consideração sobre rotação e revogação de credenciais.

O objetivo final é compreender que **gerenciar segredos não significa apenas esconder uma senha**, mas controlar todo o ciclo de vida das informações sensíveis dentro do ambiente DevOps.
---

# Correções realizadas neste fork

Esta seção registra as alterações implementadas e os testes executados neste fork.

## 1. Remoção de arquivos sensíveis do rastreamento atual do Git

**Problema:** arquivos `.env` e `config/credentials.json` estavam sendo rastreados pelo Git.

**Correção:** removidos do rastreamento atual e incluídos no `.gitignore`.

**Justificativa:** reduz o risco de adicionar credenciais ao repositório em commits futuros. Isso não remove automaticamente esses arquivos dos commits antigos.

## 2. Proteção de arquivos ignorados

**Problema:** o `.gitignore` não excluía adequadamente os arquivos de ambiente e credenciais.

**Correção:** adicionadas regras para `.env`, arquivos `.env.*` e `config/credentials.json`, mantendo `.env.example` permitido.

**Justificativa:** ajuda a prevenir a inclusão acidental de arquivos sensíveis.

## 3. Modelo de configuração

**Problema:** faltava um modelo seguro e compartilhável das variáveis necessárias.

**Correção:** criado `.env.example` sem valores de credenciais reais.

**Justificativa:** facilita configurar o projeto sem compartilhar segredos.

## 4. Configuração do banco de dados

**Problema:** configurações e credenciais estavam definidas diretamente no código.

**Correção:** `src/config.js` passou a ler variáveis de ambiente e validar os campos obrigatórios.

**Justificativa:** separa o código das configurações de cada ambiente.

## 5. Informações sensíveis nos logs

**Problema:** o código do banco poderia registrar informações desnecessárias sobre a conexão.

**Correção:** `src/database.js` passou a evitar registrar usuário e senha.

**Justificativa:** reduz o risco de exposição de credenciais em logs.

## 6. Exposição de informações pelos endpoints

**Problema:** os endpoints originais tinham referências incorretas e risco de expor detalhes internos.

**Correção:** ajustada a inicialização da aplicação e limitadas as respostas de `/`, `/health` e `/config-check`.

**Justificativa:** mantém respostas funcionais sem devolver valores de credenciais.

## 7. Tratamento de segredo no script de backup

**Problema:** o script utilizava uma variável de ambiente inconsistente e não tratava adequadamente a ausência da configuração.

**Correção:** ajustada a leitura da variável e removida a impressão de segredos nos logs.

**Justificativa:** melhora o tratamento de configuração ausente e reduz exposição acidental. A rotina continua sendo uma simulação, não um backup real.

## 8. Configuração do Docker Compose

**Problema:** a configuração original continha credenciais fixas e publicava a porta do banco no host.

**Correção:** alterada a configuração para usar variáveis de ambiente obrigatórias para senhas e removida a publicação da porta do MySQL.

**Justificativa:** reduz a exposição desnecessária do banco e evita senhas fixas no arquivo Compose. A validação do Compose ainda está pendente.

## Validações realizadas

- `node --check` nos arquivos JavaScript alterados, sem erros de sintaxe.
- Endpoints `/`, `/health` e `/config-check` testados, todos retornando HTTP 200.
- `npm audit` executado com resultado de zero vulnerabilidades conhecidas nas dependências auditadas.

## Pendências e limitações

- Validar o Docker Compose quando o comando estiver disponível.
- Confirmar a conexão real com o MySQL.
- Revisar o histórico do Git antes da publicação.
- A atividade original solicita dez problemas; esta documentação registra oito correções ou melhorias implementadas, sem afirmar que os dez problemas foram resolvidos.
