# Frontend – Sistema de Registro de Ponto

Este frontend foi desenvolvido em **React** e tem como objetivo permitir que o usuário registre seu ponto eletrônico de forma simples e intuitiva, utilizando **geolocalização**, **câmera do dispositivo** e **interação em tempo real**, sem recarregar a página.



A aplicação consome uma API backend responsável por armazenar os registros de ponto.

---

## 🚀 Tecnologias Utilizadas

- **React**
- **Vite**
- **Axios** – comunicação com a API
- **React Hooks** (`useState`, `useEffect`, `useRef`)
- **React Leaflet** – mapa e geolocalização
- **Leaflet**
- **CSS puro** (sem frameworks)
- **React Icons**

---

## 📁 Estrutura de Pastas

```txt
src/
├── components/
│   ├── Welcome.jsx
│   ├── MapView.jsx
│   ├── Camera.jsx
│   ├── Historico.jsx
│   └── Navbar.jsx
├── styles/
│   ├── welcome.css
│   ├── camera.css
│   └── map.css
├── service/
│   └── api.js
├── App.jsx
└── main.jsx

```

---

## 🔗 Acesse a aplicação:  

[https://front-test-aportt.vercel.app](https://front-test-aportt.vercel.app)

---

## ⚙️ Instalação e Execução
### 1️⃣ Instalar dependências
```Bash
npm install
```

###2️⃣ Executar o projeto
```Bash
npm run dev
```
```txt
O frontend será iniciado em:
http://localhost:5173
```

---

## 🔄 Fluxo de Funcionamento

O registro de ponto acontece em etapas dentro de um único card, sem troca de tela:

---

## 1️⃣ Tela inicial

Exibe data e hora atual
Saudação dinâmica (Bom dia / Boa tarde / Boa noite)
Botão Registrar ponto

---

## 2️⃣ Confirmação de localização

Exibição de mapa com a localização atual do usuário
Marcador indicando a posição
Confirmação visual da localização antes de continuar

---

## 3️⃣ Captura de imagem

Abertura da câmera do dispositivo
Captura da foto do usuário
Visualização local da imagem capturada

---

## 4️⃣ Envio do registro

Os dados são enviados para o backend
O fluxo retorna automaticamente para a tela inicial

---

## 🗺️ Geolocalização

A aplicação utiliza a API de Geolocalização do navegador, integrada ao React Leaflet, para:
- Obter latitude e longitude do usuário
- Exibir um marcador no mapa
- Permitir confirmação visual da localização antes do registro

---

## 📷 Captura de Câmera
A câmera é acessada através da MediaDevices API do navegador:
- Compatível com desktop e dispositivos móveis
- Layout responsivo
- Controle de abertura da câmera e captura da foto
- A imagem é enviada ao backend via multipart/form-data

---

## 🕘 Histórico de Registros

O histórico de registros é exibido em um card secundário:
Lista inicial mostra apenas data e horário
Cada item possui ação para visualizar detalhes
Ao abrir um registro, são exibidos:

- Localização (latitude e longitude)
IP
Imagem capturada
O detalhe pode ser fechado sem recarregar a página

---

## 🌐 Integração com API

A comunicação com o backend é feita através do Axios, centralizada no arquivo:

```bash
src/service/api.js
```

## Principais endpoints consumidos:

```txt
POST /registro
GET /registros
```

---

## 🎨 Interface e Responsividade

Layout pensado para desktop e mobile
Componentes se adaptam ao tamanho da tela
O card principal ajusta sua altura conforme:
- **Mapa**
- **Câmera**
- **Imagem capturada**
- **Experiência fluida sem recarregamento de página**


## 📝 Observações

- O foco do frontend foi criar uma experiência simples, intuitiva e contínua
- Todo o fluxo acontece em um único card para evitar troca de telas
- A arquitetura facilita futuras melhorias, como:
       **Autenticação**

    **Dashboard de horas**

    **Filtros no histórico**

- O projeto foi desenvolvido priorizando clareza, organização e legibilidade do código