import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  url: `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`
};

export default dbConfig;