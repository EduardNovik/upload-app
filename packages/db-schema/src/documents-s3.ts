import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const documentsS3 = pgTable("documentsS3", {
  id: uuid("id").primaryKey(),
  documentName: text("documentName").notNull(),
  owner: text("owner").notNull(),
  tag: text("tag").notNull(),
  key: text("key").notNull(),
  url: text("url").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export type DocumentsS3Select = typeof documentsS3.$inferSelect;
export type DocumentsS3Insert = typeof documentsS3.$inferInsert;
