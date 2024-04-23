# Pré-Requisitos
Antes de começar, certifique-se de que você tem o Node.js e o npm instalados em sua máquina. Se não, você pode baixá-los e instalá-los a partir de nodejs.org.

# Instalação
Para instalar este projeto, siga estas etapas:

1. Clonar o Repositório
### `git clone https://seu-repositorio-aqui.git`
### `cd nome-do-projeto`

2. Instalar DependênciasDentro do diretório do projeto, execute:
# Getting Started with Create React App
### `npm install`
Isso instalará todas as dependências necessárias para rodar o projeto conforme definido no arquivo package.json.

# Executar Localmente
Para rodar este projeto localmente em sua máquina, execute o seguinte comando no terminal:

### `npm start`

Este comando irá iniciar o servidor de desenvolvimento e abrirá automaticamente uma aba no seu navegador padrão. Se o navegador não abrir automaticamente, você pode acessar http://localhost:3000 manualmente.

# Build com Capacitor

Para construir este projeto usando o Capacitor para plataformas como Android, iOS e Web, siga estas etapas:
1. Adicionar Capacitor ao seu projeto React

### `npm install @capacitor/core @capacitor/cli`
### `npx cap init` 

Siga as instruções para configurar o Capacitor.

2. Adicionar PlataformasPara Android:
### `npx cap add android`

Para iOS:
### `npx cap add ios`

 Para Web
### `npx cap add @capacitor-community/electron`

3. Build do Projeto React
### `npm run build`
Este comando prepara o build de produção do seu projeto.

4. Copiar Build para o Capacitor
### `npx cap copy`

# Executando os Testes

### `npm test App.test.js`
Este comando irá rodar os testes definidos no arquivo App.test.js usando Jest e React Testing Library, e os resultados serão exibidos no terminal.