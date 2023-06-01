import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./page/Router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);