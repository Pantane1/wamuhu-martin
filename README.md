<h1>
  <img src="https://raw.githubusercontent.com/Pantane1/wamuhu-martin/main/favcon.png" width="32" style="vertical-align: middle;" />
  Pantane Hub
</h1>

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Status-Live-success)](#)

> **Where curiosity meets clean systems.**

**Pantane Hub** is a high-performance, minimalist professional portfolio built for **Wamuhu Martin**. It serves as a central showcase for software projects, professional connections, and technical explorations.

[**Explore the Live Site ↗**](https://wamuhu-martin.vercel.app/)

---

## ✨ Key Features

*   **⚡ Real-Time GitHub Sync:** Automatically fetches and displays repositories using the GitHub REST API. Includes dynamic topic chips and language detection.
*   **💳 Integrated Payment Ecosystem:** A multi-channel support system for global and local transactions featuring direct M-Pesa integration.
*   **💨 Optimized UX:** Streamlined navigation with a "Direct-to-Action" philosophy, especially for local mobile payments.
*   **🛡️ Resilient Architecture:** Custom-built script loading logic to prevent crashes in restricted environments and handle SDK failures (like PayPal/Paystack) gracefully.
*   **📱 Mobile-First Design:** Fully responsive layout with fluid animations and a high-contrast, professional "Bright Mode" aesthetic.
*   **🎨 Custom Branding:** Unique SVG iconography and consistent design language built from scratch.

---

## 💰 Integrated Payment Systems

Pantane Hub features a robust, multi-tier payment integration designed to facilitate support from anywhere in the world, with specific optimizations for the Kenyan and African markets.

### 1. Lipa na M-Pesa (Frictionless Local Support)
*   **Integration:** Direct link via [lipana.dev](https://lipana.dev/pay/pantanehub).
*   **UX:** One-click "Support Now" functionality that bypasses intermediate forms for the fastest possible mobile payment experience in Kenya.
*   **Purpose:** Specifically designed for the 254 market to allow instant support via STK push or till number.

### 2. PayPal (Global Transactions)
*   **Integration:** Official PayPal JavaScript SDK.
*   **UX:** Interactive "Smart Payment Buttons" for Credit/Debit cards.
*   **Resilience:** Includes an automated **Direct Pay Fallback**. If the SDK is blocked or restricted, the system generates a secure legacy PayPal checkout link.

### 3. Paystack (Regional Africa)
*   **Integration:** Paystack Inline JS.
*   **Market Focus:** Preferred for secure card and mobile money transactions across the African continent.

### 4. Buy Me a Coffee (Social Support)
*   **Integration:** Lightweight URI-based redirection.
*   **Purpose:** Provides a non-formal, social way for supporters to contribute with minimal friction.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 19 (Functional Components & Hooks) |
| **Styling** | Tailwind CSS (Utility-first design) |
| **Logic** | TypeScript (Type-safe systems) |
| **Data** | GitHub REST API |
| **Fintech** | M-Pesa (via lipana.dev), PayPal SDK, Paystack |

---

## 🚀 Getting Started

This project uses **ES Modules** and modern web standards. Because of browser security policies regarding modules, you cannot simply open the `index.html` file by double-clicking it.

### Local Development
1.  **Clone the repo:**
    ```bash
    git clone https://github.com/pantane1/pantane-hub.git
    ```
2.  **Run a local server:**
    *   If using **VS Code**, install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and click "Go Live".
    *   Or use Python: `python -m http.server`
    *   Or use Node: `npx serve .`

---

## 📂 Structure

```text
├── components/       # Reusable UI (Header, Icons, SupportModal)
├── pages/            # Page-level components (Home, Projects, Support)
├── types.ts          # TypeScript interfaces & Enums
├── App.tsx           # Main router & page controller
├── index.html        # Main entry point & script map
└── index.tsx         # React mounting logic
```

---

## 🤝 Connect With Me

*   **LinkedIn:** [Pantane Hub](https://www.linkedin.com/in/pantane/)
*   **Twitter/X:** [@pantane4](https://twitter.com/pantane4)
*   **Email:** [pantane254@gmail.com](mailto:pantane254@gmail.com)
*   **WhatsApp:** [+254 740 312 402](https://wa.me/254740312402)

---

## 📜 License

© 2025 **Wamuhu Martin (Pantane)**. Built with passion and precision.
All rights reserved.
