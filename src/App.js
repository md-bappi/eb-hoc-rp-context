import React from "react";
import JerceyMacker from "./components/JerceyMacker";
import ErrorBounding from "./components/ErrorBounding";

const App = () => {
  return (
    <div>
      <ErrorBounding>
        <JerceyMacker name="messi" jerceyNumber="10" />
      </ErrorBounding>
      <ErrorBounding>
        <JerceyMacker name="naimer" jerceyNumber="9" />
      </ErrorBounding>
      <ErrorBounding>
        <JerceyMacker jerceyNumber="12" />
      </ErrorBounding>
    </div>
  );
};

export default App;
