# ZiPDF

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss)
![jsPDF](https://img.shields.io/badge/jsPDF-PDF%20Generation-red)
![License](https://img.shields.io/badge/license-MIT-green)

A browser-based PDF conversion tool built with React and TypeScript.

ZiPDF allows users to upload images and convert them into PDF files directly in the browser. The project focuses on learning React concepts such as components, props, state management, routing, reusable UI, and client-side file processing.

## 🚀 Features

### Completed

- ✅ Image upload interface
- ✅ Image preview before conversion
- ✅ JPG to PDF conversion
- ✅ PNG/WebP/BMP tool structure support
- ✅ Dynamic tool routing
- ✅ Reusable upload component
- ✅ Download converted PDF
- ✅ Client-side file processing
- ✅ Responsive UI

### In Progress

- 🔄 drag and drop support
- 🔄 File removal before conversion
- 🔄 Improved error handling
- 🔄 Conversion progress indicator

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Libraries

- jsPDF - PDF generation
- lucide-react - Icons

### Development Tools

- ESLint
- npm
- Git/GitHub

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── BlogConverter.tsx
│   ├── Body.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ToolGrid.tsx
│   ├── UploaduiCard.tsx
│   ├── OperationUi.tsx
│   └── reusable UI components
│
├── pages/
│   └── Application pages
│
├── Data/
│   └── tool configuration
│
├── imgtopdf/
│   └── Image conversion logic
│
└── main.tsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Abhishek3917/ZiPDF.git
```

Go into the project:

```bash
cd ZiPDF
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## 🧠 Concepts Practiced

This project was built to practice:

- React component architecture
- Props and state management
- Parent-child data flow
- React hooks

Examples:

- `useState`
- `useEffect`
- `useParams`

- Dynamic routing
- Reusable components
- File handling in browser
- Blob and URL object handling
- Async operations

---

## 🔐 Privacy

Files are processed locally in the browser.

No uploaded files are sent to a backend server.

---

## 🔮 Future Improvements

Planned features:

### More Conversion Tools

- PDF to Image
- PDF merging
- PDF splitting
- Image compression
- Image resizing
- Word to PDF
- Excel to PDF

### UI Improvements

- drag and drop experience
- File list management
- Conversion animations
- Better mobile support

### Performance

- Web Worker based conversion
- Large file optimization
- Better memory management

### Backend (Optional)

Possible future additions:

- User accounts
- Conversion history
- Cloud storage
- API based conversion service

---

## 📌 Learning Goal

ZiPDF is mainly a learning project focused on building a practical React application while understanding:

- Component design
- Data flow
- Routing
- File APIs
- Frontend architecture

---

## License

MIT