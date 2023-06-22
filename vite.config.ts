import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:  {
    rollupOptions:  {
      input:  {
        main: resolve(__dirname, 'index.html'),
        signin: resolve(__dirname, 'src/pages/signin.html'),
        beers: resolve(__dirname, 'src/pages/beers.html'),
        destilateds: resolve(__dirname, 'src/pages/destilateds.html'),
        energydrinks: resolve(__dirname, 'src/pages/energy-drinks.html'),
        fermenteds: resolve(__dirname, 'src/pages/fermenteds.html'),
        ices: resolve(__dirname, 'src/pages/ices.html'),
        juices: resolve(__dirname, 'src/pages/juices.html'),
        onsale: resolve(__dirname, 'src/pages/onsale.html'),
        sparklings: resolve(__dirname, 'src/pages/sparklings.html'),
        tools: resolve(__dirname, 'src/pages/tools.html'),
        vodkas: resolve(__dirname, 'src/pages/vodkas.html'),
        waters: resolve(__dirname, 'src/pages/waters.html'),
        wines: resolve(__dirname, 'src/pages/wines.html'),
        cart: resolve(__dirname, 'src/pages/cart.html'),
        myaccount: resolve(__dirname, 'src/pages/myaccount.html'),
        newslettersuccess: resolve(__dirname, 'src/pages/newslettersuccess.html'),
        privacypolitics: resolve(__dirname, 'src/pages/privacypolitics.html'),
        payments: resolve(__dirname, 'src/pages/payments.html'),
        termsofufe: resolve(__dirname, 'src/pages/termsofuse.html'),
        finishbuy: resolve(__dirname, 'src/pages/finishbuy.html')
      }
    }
  }
})
