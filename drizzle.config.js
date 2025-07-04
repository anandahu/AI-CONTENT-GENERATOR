import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  out: "./drizzle",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_UkIT57ozOacm@ep-odd-math-a8jppzw7-pooler.eastus2.azure.neon.tech/AI-CONTENT-GENERATOR?sslmode=require&channel_binding=require'
    },
});