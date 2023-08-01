import React from "react";
import Home from "./Home";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; 

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <I18nextProvider i18n={i18n}>
          <Home />
        </I18nextProvider>
      </Suspense>
    </div>
  );
}

export default App;
