// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>
console.log('Vite ⚡️ Rails')

// If using a TypeScript entrypoint file:
//     <%= vite_typescript_tag 'application' %>
//
// If you want to use .jsx or .tsx, add the extension:
//     <%= vite_javascript_tag 'application.jsx' %>

console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails')

// Example: Load Rails libraries in Vite.
//
// import * as Turbo from '@hotwired/turbo'
// Turbo.start()
//
// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()
//
// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'

// // Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import Vue from 'vue'
// import { App, plugin } from '@inertiajs/inertia-vue'
// import { InertiaProgress } from '@inertiajs/progress'
console.log(Vue)
// Vue.use(plugin)
// InertiaProgress.init()

// // Instead of using App.vue page, Inertia
// // will use Rails application.html.erb layout page
// const el = document.getElementById('app')

// new Vue({
//   render: h => h(App, {
//     props: {
//       initialPage: JSON.parse(el.dataset.page),
//       resolveComponent: name => require(`../Pages/${name}`).default,
//     },
//   }),
// }).$mount(el)
