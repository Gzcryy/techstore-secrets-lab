# Política de Segurança

## Objetivo

Este documento descreve as práticas de segurança adotadas neste laboratório.

## Reporte de vulnerabilidades

Caso encontre uma vulnerabilidade, evite publicar credenciais, tokens ou informações sensíveis em issues públicas. Descreva o problema, seu impacto e os passos para reproduzi-lo sem expor segredos.

## Gerenciamento de segredos

- Não armazene credenciais reais no repositório.
- Utilize variáveis de ambiente para configurações sensíveis.
- Mantenha arquivos `.env` fora do controle de versão.
- Utilize `.env.example` como modelo, sem segredos reais.
- Se uma credencial real for exposta, revogue-a ou faça sua rotação.

## Dependências

Execute `npm audit` para verificar vulnerabilidades conhecidas nas dependências e atualize os pacotes de forma controlada.

## Limitações

Este projeto é um laboratório educacional e não deve ser considerado pronto para produção. Os testes realizados não substituem uma auditoria completa de segurança.
