import {
  Configuration,
  Webchat,
  WebchatProvider,
  useClient,
} from "@botpress/webchat";

import "./style.css";
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
          <Webchat />
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
