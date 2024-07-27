// src/authConfig.js
export const msalConfig = {
    auth: {
        clientId: "YOUR_MICROSOFT_CLIENT_ID",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000/home",
    },
};

export const loginRequest = {
    scopes: ["user.read"],
};
