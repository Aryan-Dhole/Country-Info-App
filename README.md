# 🌍 Country Info App

A responsive, API-powered country info app built using vanilla JavaScript, `async/await`, and the [REST Countries API](https://restcountries.com/). Built on Day 34 of my dev grind to sharpen real-world parsing, error handling, and clean UI/UX delivery.

---

## 🚀 Features

- 🔍 Search for any country by name (e.g. India, Japan, France)
- 📦 Displays:
  - Country name
  - Capital
  - Population (formatted)
  - Region
  - Flag
  - Currency
  - Languages spoken
- ⚙️ Built with `async/await` + full `try/catch` error handling
- 🧠 Parses complex nested objects into clean output
- 🔄 Handles typos, empty input, and not-found errors
- ⌨️ Trigger search via `Enter` key
- 🌀 Loading spinner while fetching
- 📱 Mobile-responsive layout using Bootstrap

---

## 🌐 Live Demo

🔗 [Click here to try it](https://country-info-js-app.netlify.app/)

---

## 💻 Tech Stack

- HTML  
- CSS (Bootstrap 5)  
- JavaScript (Vanilla)  
- REST Countries API  
- Netlify (Deployment)

---

## 🧠 What I Learned

- DOM targeting, `querySelector`, `addEventListener`
- How to safely access nested API data
- `Object.values()`, `.join(", ")`, fallback logic
- UX improvements: spinners, Enter key triggers, centered output
- Handling edge cases like “India” returning wrong result (solved with `?fullText=true`)

---

## 📦 Future Enhancements

- Show bordering countries
- Dark mode toggle
- Local search history
- Native language names

---

## 🙌 Author

Built with intent and precision by Aryan Dhole  
> Day 34 — August 3, 2025

