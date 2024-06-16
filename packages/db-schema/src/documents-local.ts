import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const documentsLocal = pgTable("documentsLocal", {
  id: uuid("id").primaryKey(),
  documentName: text("documentName").notNull(),
  owner: text("owner").notNull(),
  tag: text("tag").notNull(),
  file: text("file").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export type DocumentsLocalSelect = typeof documentsLocal.$inferSelect;
export type DocumentsLocalInsert = typeof documentsLocal.$inferInsert;
