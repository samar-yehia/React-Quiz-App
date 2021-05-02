// Uncomment the following line for docker deployment
// export const CONNECTION_URL = "mongodb://mongo:27017/?retryWrites=true";

// uncomment the following line for local dev
export const CONNECTION_URL = "mongodb://localhost:27888/?retryWrites=true";
export const PORT = process.env.PORT || 5000;