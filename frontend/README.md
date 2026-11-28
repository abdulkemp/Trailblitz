# Trailblitz frontend

A Vue 3 storefront site with Home, About, Shop, Collection and Contact pages.

Built with [Vite](https://vite.dev), [Vue Router](https://router.vuejs.org), [Tailwind CSS v4](https://tailwindcss.com) and a shared global UI component library (`Base*` components).

## Project setup

```sh
npm install
```

### Develop with hot reload

```sh
npm run dev
```

The Shop, Collection and Contact pages need the backend running (see [../backend/README.md](../backend/README.md)). While developing, Vite forwards every `/api` request to `http://localhost:3000`.

## Talking to the API

All API calls go through `src/services/api.js` (`getProducts`, `getProduct`, `sendContactMessage`).

For production, create a `.env.production` file with the backend's address:

```
VITE_API_URL=https://your-backend.example.com
```

The backend must also allow the site's address in its `CORS_ORIGIN` setting.

### Build for production

```sh
npm run build
```

### Preview the production build

```sh
npm run preview
```

### Format source files

```sh
npm run format
```

## Global UI components

Every component in `src/components/UI` is registered globally by `src/plugins/globalComponents.js`, so you can use them in any template without importing them:

```vue
<BaseButton>Shop now</BaseButton>
<BaseBadge>New</BaseBadge>
```

To add a component, create it in `src/components/UI` and export it from `src/components/UI/index.js`. Examples for each component are in [`src/components/UI/USAGE_DOCS.md`](src/components/UI/USAGE_DOCS.md).

## Tailwind

Tailwind is loaded in `src/assets/main.css` **without** its Preflight CSS reset, so the existing page styles look the same as before. To switch on the full reset, replace the Tailwind imports in that file with `@import "tailwindcss";`.
