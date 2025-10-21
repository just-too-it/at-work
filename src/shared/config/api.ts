const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  },
};

if (!import.meta.env.VITE_API_BASE_URL) {
  console.warn("VITE_API_BASE_URL is not set, using default");
}

export default config;
