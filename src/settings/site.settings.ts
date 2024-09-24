const siteConfig = {
  name: "New Dashboard",
  description:
    "Your trusted partner in tourism, providing amazing travel experiences and exceptional customer service.",
  author: "M360ICT",
  urls: {
    dev: "http://192.168.0.234:5050/api/v1",
    prod: "https://hbaviation-server.skill360.world/api/v1",
    imgHost: "https://m360ict.s3.ap-south-1.amazonaws.com/hb-aviation-files/",
    isDev: process.env.NODE_ENV !== "development",
  },
};

export default siteConfig;
