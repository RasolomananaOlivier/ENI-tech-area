const config = {
  BASE_URL: " http://192.168.226.26:8001",
};

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  config.BASE_URL = " http://192.168.226.26:8001";
}

export default config;
