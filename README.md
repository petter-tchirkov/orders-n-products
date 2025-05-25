# DzenCode test task

## Description
This is a simple [Nuxt 3](https://nuxt.com/) project that shows company's orders
and products these orders consist of.

### Backend
This project doesn't have a dedicated backend application because the size and
scope don't fit the effort. For API requests it uses [Nitro server
engine](https://nuxt.com/docs/getting-started/server) that is buil-in in Nuxt 3
applications.
The websocket implementation is also done via Nitro

### Frontend
- Nuxt implements file-based routing strategy and this project implements it.
- There is only one layout, but in case of scaling we have a base for adding other
layouts without overwriting anything.
- Reusable functions are presented as composables to keep
  [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- There are visions in the frontend community on how to organize stores. I
  prefer to keep them small and only **STORE** data so data fetching is done with
  composables that fetch the api and put data into a corresponding store. The
  project scope is small so we could neglect stores at all, but again, thinking
  about scaling
- Application uses [TailwindCSS](https://tailwindcss.com/) as the main CSS
  utility and [DaisyUI](https://daisyui.com/) for theming and premade primitives
- Project colorscheme is inspired by the awesome
  [Kanagawa](https://github.com/rebelot/kanagawa.nvim) theme for Neovim
- Linting and formatting is done by [eslint](https://eslint.org/) and
  [eslint-stylistic](https://eslint.style/) respectively. The config is created
  by a [Anthony Fu](https://github.com/antfu), the Vue/core and Nuxt contributor
