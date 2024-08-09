import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PostProvider from "./PostProvider.jsx";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    body2: {
      fontSize: "1rem",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PostProvider>
  </React.StrictMode>
);
