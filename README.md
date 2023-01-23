# ![logo](https://user-images.githubusercontent.com/44211093/213951997-8f6bc586-1601-49ef-82b1-39f6143d5804.png)
![Cover](https://user-images.githubusercontent.com/44211093/213952021-6303de8b-4a6a-4e82-bbdc-18820e43cb23.png)

## 💻 O projeto
Essa aplicação foi desenvolvida durante a NLW Setup, promovido pela [Rocketseat](https://www.rocketseat.com.br/). Essa aplicação para a criação de hábitos traz uma
espécie de calendário, onde em cada dia há diversos hábitos, cadastrados por você, a serem cumpridos.
A aplicação foi desenvolvida de ponta-a-ponta, desde o Back-end até o Front-end web e mobile.

## ✨ Tecnologias
### Front-end
- [ ] React
- [ ] React Native
- [ ] React Native Reanimated
- [ ] Typescript
- [ ] Axios
- [ ] TailwindCSS
- [ ] nativeWind

### Back-end
- [ ] Node
- [ ] Prisma
- [ ] Typescript
- [ ] Postgress
- [ ] Fastfy

## 🚀Como executar

Comece clonando o repositório:
```bash
git clone https://github.com/lucasgabriel13/habits.git
```
### Executando o Back-end
```bash
# Entre na pasta server
cd server

# Instale as dependências
npm install

# Crie o arquivo .env com a variável
DATABASE_URL="file:./dev.db"

# Execute as migrations
npx prisma migrate dev

# Execute a aplicação
npm run dev
```
A aplicação ficará dinponível na endereço [http://localhost:3333](http://localhost:3333).

### Executando o Front-end Web
```bash
# Entre na pasta web
cd web

# Instale as dependências
npm install

# Execute a aplicação
npm run dev
```
O app estará disponível no seu browser pelo endereço [http://localhost:5173](http://localhost:5173).

### Executando o Front-end Mobile
```bash
# Entre na pasta mobile
cd mobile

# Instale as dependências
npm install

# Execute a aplicação
npx expo start
```
Agora é só você abrir a aplicação em um Emulador Android/IOS ou rodar no [Expo Go](https://expo.dev/client).

---
<p align="center">Desenvolvido com 💜 por Lucas Gonçalves</p>
