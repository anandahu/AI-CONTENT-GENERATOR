import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: varchar('formData', { length: 255 }),
  aiResponse: text('aiResponse'),
  templateSlug: varchar('templateSlug', { length: 255 }).notNull(),
  createdBy: varchar('createdBy', { length: 255 }),
  createdAt: varchar('createdAt', { length: 255 })
});