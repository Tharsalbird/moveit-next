import "../styles/global.css";

import { ChallengeContext } from "../contexts/ChallengeContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengeContext.Provider value={{ level, levelUp }}>
      <Component {...pageProps} />
    </ChallengeContext.Provider>
  );
}

export default MyApp;
