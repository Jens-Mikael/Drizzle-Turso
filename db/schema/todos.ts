import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from ".";
export const todos = sqliteTable("todos", {
  id: text("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID())
    .notNull(),
  user_id: text("user_id")
    .notNull()
    .references(() => users.id),
  isCompleted: integer("isCompleted", { mode: "boolean" })
    .default(false)
    .notNull(),
  content: text("content").notNull(),
  createdAt: integer("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

//make todo app insted where fetch user todods
