// import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import React, { useEffect, useState, version } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      for (let i = 0; i < 1000000000; i++) {
        //
      }
      setLoading(false);
    }
  }, [loading]);

  const onPress = () => {
    if (!loading) {
      setLoading(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.versionText}>React {version}</div>
      <div onClick={onPress}>
        <div style={styles.button}>
          <div style={styles.buttonText}>
            {loading ? "Loading..." : "Press Me"}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  button: {
    backgroundColor: "#00ffcc",
    padding: 16,
    borderRadius: 16,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
  },
  versionText: {
    padding: 16,
    fontSize: 32,
    color: "#ffffff",
  },
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(<App />);

// render(<App />, document.getElementById("root"));
