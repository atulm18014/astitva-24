
import React, { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import "./styles/index.scss";
import Alert from "./components/Alert";

import { auth } from "./config/config-dev";
// import { auth } from "./config/config-prod";
import { useAuthStatus } from "./hooks/hooks";
import AnimatedRoutes from "./pages/AnimatedRoutes";
import PropagateLoader from "react-spinners/PropagateLoader";

// Example of a loading spinner with background video
const LoadingScreen = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#ffffff",
  };
  
  return (
    <div className="loading-screen">
      <div className="loading-content">
<div className="loading-message">
  Welcome To  <span className="highlight-load">Astitva 2024</span>
</div>
        <PropagateLoader
          color="#413737"   // Color of the spinner
          loading={loading} // Spinner will load based on 'loading' state
          cssOverride={override}
          size={15}        // Adjust size of the spinner as needed
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

function App() {
  const { checkingStatus, authUser, updateAuthUserAttr } = useAuthStatus();
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [loading, setLoading] = useState(true); // Initial loading state

  // Set a 15-second timeout for the loading screen
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // 10 seconds

    return () => clearTimeout(timeout); // Cleanup the timeout when component unmounts
  }, []);

  const handleLogout = (alertMsg, alertType) => {
    auth.signOut()
      .then(() => {
        if (alertMsg) {
          setAlertMsg(alertMsg, alertType);
        } else {
          setAlertMsg("Signed out!");
        }
      })
      .catch((err) => {
        setAlertMsg(err.message);
        setAlertSeverity("error");
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertMsg("");
      setAlertSeverity("info");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [alertMsg]);

  // Render loading screen or main content based on loading state
  if (loading) {
    return <LoadingScreen loading={loading} />;
  }

  return (
    <Layout user={authUser}>
      <Alert message={alertMsg} severity={alertSeverity} />
      <AnimatedRoutes
        authUser={authUser}
        handleLogout={handleLogout}
        updateAuthUserAttr={updateAuthUserAttr}
        checkingStatus={checkingStatus}
      />
    </Layout>
  );
}

export default App;
