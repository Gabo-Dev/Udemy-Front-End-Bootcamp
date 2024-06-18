# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Notes:
- I'm using a library for managing JSON data.
- To create a RESTful API, it´s neccesary to use the command: npm install json-server
- After this, we need to set our db.json using:
"scripts": {
  "start": "vite",
  "serve:json": "json-server --watch db.json --port 5000"
}
//  into package.json and we must specify the path of the json
- After this one we gonna run the  JSON server  using:
npm run serve:json
