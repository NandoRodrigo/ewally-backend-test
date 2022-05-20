# **Verificador de Códigos de Barra**

Essa API tem o objetivo de verificar dados embutidos em códigos de barra de documentos de títulos e de convênios, retornando o valor, o código de barras em si, e a data de expiração de pagamento, a partir da linha digitável.

---

## **Instalação**

Faça o clone do repositório e após rode o seguinte comando para instalar as dependências.

```
yarn install
```

Após instaladas, rode o seguinte comando para rodar a aplicação em modo de desenvolvimento:

```
yarn dev
```

Também é possível transpilar a aplicação para Javascript:

```
yarn tsc
```

E a partir daí é possivel rodar com o seguinte comando:

```
yarn start
```

---

## **Utilização**

**Obs**: Para a correta utilização da API, é necessário algum _Client_, tal como o [Insomnia](https://insomnia.rest/). A aplicação está rodando na porta _8080_.

---

## **Rotas**

A API possúi apenas uma rota para utilização:

| Método | Rota                                  |
| :----: | ------------------------------------- |
|  Get   | /boleto/`<linha_digitável_do_boleto>` |

---

### **GET /boleto/`<linha_digitável_do_boleto>`**

Nessa rota é possível conferir os dados do boleto a partir da linha digitável, caso a linha digitável seja válida, retornará a seguinte resposta:

RESPONSE STATUS -> HTTP 200 (OK)

```json
{
  "barCode": "codigo_de_barras",
  "amount": "valor",
  "expirationDate": "data-de-vencimento"
}
```

Caso exista algum erro na linha digitável do boleto, retornará a resposta informando qual a inconsistência encontrada. Um dos possíveis erros seria:

RESPONSE STATUS -> HTTP 400 (BAD REQUEST)

```json
{
  "message": "Invalid characters on barcode"
}
```

---

## **Tecnologias Utilizadas**

- Node.JS
- Express.JS
- TypeScript

---

## **Licença**

MIT
