# <> Password Generator

A simple, interactive **Password Generator** built with **Core React** and **React Hooks**.
This project helped me practice state management, side effects, and custom logic in React.

=> Live Demo: [Password Generator](https://password-generator-zeta-five-88.vercel.app/)

---

## <> Features

* Generate secure passwords with:

  * Adjustable length (`6–20` characters)
  * Option to include **numbers**
  * Option to include **special characters**
* One-click **copy to clipboard**
* Responsive UI

---

## <> Built With

* **React** – for component-based UI
* **React Hooks**:

  * `useState` → manage input state and generated password
  * `useCallback` → memoize the password generation function
  * `useEffect` → run password generation on first render & when dependencies change
* **JavaScript** – custom password generation logic
* **Tailwind CSS** – styling (with AI assistance, so I could focus on React)

---

## <> Learning Goals

* Deepen understanding of **React Hooks** (`useState`, `useCallback`, `useEffect`)
* Implement conditional logic in password generation
* Trigger functions on specific dependency updates with `useEffect`
* Maintain clean and reusable React code structure
* Keep CSS secondary, with focus on **React fundamentals**

---

## <> Project Setup

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd password-generator
npm install
npm start
```



---

## <> Acknowledgment

* **Styling help** was taken with AI assistance so that I could focus fully on **core React and React Hooks**.

---
