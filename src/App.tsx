import React, { useEffect, useRef } from "react";
import {
  Configuration,
  Webchat,
  WebchatProvider,
  useClient,
} from "@botpress/webchat";

import "./bot-styles/section-one.css";
import "./bot-styles/section-two.css";
import "./bot-styles/section-three.css";
import "./bot-styles/section-four.css";
import "./bot-styles/section-five.css";
import { theme } from "./theme";

const clientId = "0bcc6702-fe27-4a3d-b149-0710b414996b";

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    firstName: params.get("firstName") || "",
    lastName: params.get("lastName") || "",
    workEmail: params.get("workEmail") || "",
    personalEmail: params.get("personalEmail") || "",
    employerDistrict: params.get("employerDistrict") || "",
    school: params.get("school") || "",
    state: params.get("state") || "",
    mobileNumber: params.get("mobileNumber") || "",
  };
}

/**
 * A container that observes changes in its children
 * and scrolls to the bottom when new content is added.
 */
function AutoScrollContainer({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current as HTMLDivElement | null;
    if (!container) return;

    // Whenever a new node is added (e.g., a new message),
    // scroll the container to the bottom.
    const observer = new MutationObserver(() => {
      container.scrollTop = container.scrollHeight;
    });
    observer.observe(container, { childList: true, subtree: true });

    // Clean up the observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        maxHeight: "80%", // adjust as needed
        overflowY: "scroll",

        scrollBehavior: "smooth",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const client = useClient({ clientId });
  const userData = getQueryParams();

  return (
    <WebchatProvider
      userData={userData}
      configuration={config}
      client={client}
      theme={theme}
    >
      <div className="bot-container">
        <div className="bot-wrapper">
          {/* <AutoScrollContainer> */}
          <Webchat />
          {/* </AutoScrollContainer> */}
        </div>
      </div>
    </WebchatProvider>
  );
}

const config: Configuration = {
  botAvatar:
    "https://files.bpcontent.cloud/2025/01/23/23/20250123235417-NQINC94T.png",
  botName: "Jeanie",
  // botDescription: "Your virtual assistant",
};
