
# Zeniq

**Zeniq** is a modern, dark-themed, Gen-Z inspired stock market dashboard—reimagined from a MarketPulse template—built with a neon pop-art aesthetic, complete authentication powered by Supabase, responsive frontend, and a fully functional backend.  
Developed by **Sumit Das** & **Nandini Das**.

---

## ✨ Features

- **Branding & Design**
  - All “MarketPulse” replaced with **Zeniq**
  - Neon-glow, dark pop-art theme (cyan, pink, purple, lime)
  - Futuristic icon-only logo
- **Core Pages (fully redesigned)**
  - **Dashboard**: Glassmorphism cards, animated glow, mini-charts, interactive sidebar
  - **Stocks / Markets / Currencies / Global / Portfolio / Performance** pages with micro-interactions
  - **Removed:** Analysis & Settings pages
- **Hero Landing Page**
  - Fullscreen dark backdrop with animated neon lines
  - Pop-art illustrations blending charts, cityscapes, coins, and arrows
  - Headline: *“Zeniq – Your Gen Z Gateway to the Markets”*
- **Authentication**
  - Pop-art login/signup page
  - Secure signup/login via **Supabase**
  - Forgot password flow
- **Data Integration**
  - Stock data from free APIs (Alpha Vantage, Yahoo Finance, NSE India)
  - Real-time updates via WebSockets or Supabase Realtime
- **Responsiveness**
  - Optimized for desktop, tablet, and mobile
- **Animations**
  - Neon hover effects, ripple clicks, animated loading states, interactive charts

---

## 🛠 Tech Stack

| Layer       | Technology(s)                               |
|-------------|---------------------------------------------|
| Frontend    | React, Tailwind CSS, Chart.js (or similar)   |
| Backend     | Supabase (Auth + Database + Realtime)        |
| APIs        | Free stock data APIs                         |
| Deployment  | Netlify / Vercel (frontend), Supabase (backend) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14+
- npm or Yarn
- Git
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SumitkCodes/Zeniq.git
   cd Zeniq
    ```
2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the root:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   NEXT_PUBLIC_STOCK_API_KEY=your_stock_api_key_here
   ```

4. **Connect Supabase**

   * Set up a Supabase project with Auth & Database
   * Enable email/password authentication
   * Create tables (`users`, `watchlists`, `portfolios`, `preferences`)
   * Add Supabase credentials to `.env.local`

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open in browser**

   ```
   http://localhost:3000
   ```

---

## 📂 Folder Structure

```
/public
  └── assets (logo, favicon, illustrations)
/src
  ├── components
  │   ├── Dashboard/
  │   ├── Auth/
  │   ├── Hero/
  │   ├── Navbar/
  │   ├── Charts/
  │   └── UI/ (buttons, cards, loaders)
/pages
  ├── index.js (Hero + CTA)
  ├── dashboard.js
  ├── stocks.js
  ├── markets.js
  ├── currencies.js
  ├── global.js
  ├── portfolio.js
  ├── performance.js
  ├── auth/
  │   ├── login.js
  │   ├── signup.js
  │   └── forgot-password.js
  └── _app.js, _document.js
/utils
  ├── api.js
  └── supabaseClient.js
```

---

## 🎨 Design Vision

* **Primary BG:** `#0C0C0E`
* **Accents:** Neon Cyan `#00FFF7`, Neon Pink `#FF4EDB`, Neon Purple `#A259FF`, Neon Lime `#B6FF00`
* **Fonts:** *Space Grotesk* / *Clash Display* (headings), *Inter* (body), *IBM Plex Mono* (numbers)
* **Effects:** Glassmorphism, neon glow, micro-animations

---

## 👥 Contributors
Sumit Das & Nandini Das

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.

---

