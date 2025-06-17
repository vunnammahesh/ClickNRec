
# 📹🎙️ Click-N-Record

A simple and clean web application built using **React**, **Vite**, and **Tailwind CSS** that allows users to record **audio** and **video** directly from their device, preview the recording, and download it locally.

---

## 🚀 Features

✅ Record **audio** and **video** using your device’s microphone and camera  
✅ **Preview** the recording within the app after stopping  
✅ **Download** audio recordings as `.webm` and video recordings as `.webm`  
✅ Toggle between **audio** and **video** recording modes  
✅ **Live recording timer** displayed during recording  
✅ **Clean, responsive UI** designed with Tailwind CSS  
✅ Handle **permission errors** gracefully  
✅ (Bonus) **My Recordings** section (in-memory for this version)

---


## 🛠️ Tech Stack

- **React 19**
- **Vite 6**
- **Tailwind CSS 4**
- **MediaRecorder API**
- **React Icons**

---

## 📦 Project Metadata

- **Project Name:** Click-N-Record
- **Description:** A simple and intuitive React app to record audio and video, preview recordings, and download them locally.
- **Author:** Mahesh Vunnam
- **Deployment:** Vercel
---

## 📝 Steps to Run Locally

1️⃣ Clone the repository

```bash
git clone https://github.com/vunnammahesh/ClickNRec.git
cd clickNRec
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Start the development server

```bash
npm run dev
```

4️⃣ Open [http://localhost:5173](http://localhost:5173) in your browser 🚀

---

## 🎁 Bonus Features

- Toggle button to switch between **Audio** and **Video** modes
- Recording **duration timer**
- **In-memory recording list** (My Recordings button in the header — planned for future versions to persist via LocalStorage)
- Graceful handling for **camera/microphone permission errors**

---

## ⚠️ Issues Faced / Trade-offs

- No persistent storage implemented yet (My Recordings is in-memory for now).
- Limited to **webm** format for both audio and video to keep it consistent and compatible.
- Tried both **toggle button** and **radio options** for mode switch — final implementation uses a toggle beside the Start Recording button for cleaner UX.

---

## 📜 License

This project is open source and free to use.

---

## ✨ Credits

Built by Mahesh Vunnam
