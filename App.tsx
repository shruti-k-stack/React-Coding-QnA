import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TabForms from "./src/utils/TabForms";

export const AppLayout = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<TabForms />} />

    </Routes>
  </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(<AppLayout />);
