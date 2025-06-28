# 🧪 Cypress E2E Testing – SauceDemo

![Cypress Test Demo](https://tenor.com/j6btZGEAjxO.gif)

Proyek ini berisi otomatisasi end-to-end testing menggunakan [Cypress](https://www.cypress.io/) pada situs demo [saucedemo.com](https://www.saucedemo.com/v1/). Pengujian mencakup seluruh alur mulai dari login, pemilihan produk, hingga proses checkout, lengkap dengan validasi UI dan error handling.

## 📂 Struktur Proyek

- `cypress/e2e/` — Berisi test case end-to-end
- `cypress/support/` — Berisi helper & custom command
- `cypress/fixtures/` — Berisi data dummy seperti user login
- `pageObjects/` — Implementasi Page Object Model (POM)
- `.github/workflows/` — Konfigurasi GitHub Actions untuk CI/CD

## ⚙️ Teknologi

- **Cypress 14.5.0**
- **JavaScript**
- **Page Object Model (POM)**
- **GitHub Actions** – Untuk otomatisasi test setiap push/pull request

## 🚀 Fitur Test

- ✅ Positive dan Negative Login
- ✅ Validasi form login & error handling
- ✅ Cek item produk (nama, harga, tombol add to cart)
- ✅ Add & remove item dari cart
- ✅ Proses checkout hingga selesai
- ✅ Filter produk
- ✅ Validasi UI elemen terlihat/terisi
- ✅ CI/CD: Otomatis test saat push via GitHub Actions

## 📦 Instalasi Lokal

```bash
npm install
npx cypress open     # untuk mode GUI
npx cypress run      # untuk mode headless
