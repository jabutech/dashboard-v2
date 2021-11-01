# Installation

1. Type on terminal

```jsx
npx degit [nama_repo] <nama_app>
```

### Example

```jsx
npx degit letenk/dashboard-v2 test-template
```

1. Install depedency

```jsx
yarn install
```

Or

```jsx
npm install
```

2. Change name container and port on **docker-compose.yml**
3. Run docker

```jsx
docker-compose up -d --build
```

 Or  without docker, run with **yarn dev** or **npm run dev**
