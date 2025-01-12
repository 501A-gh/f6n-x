import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }), // Unique ID for each user
  displayName: text("displayName").notNull(), // Name of the user
  userName: text("userName").notNull().unique(), // Slugified version of the name
});

export const equations = sqliteTable("equations", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }), // Unique ID for each formula
  title: text("title").notNull(), // Title of the formula
  description: text("description").notNull(),
  latex: text("latex").notNull(), // The LaTeX representation of the formula
  slug: text("slug").notNull().unique(), // Slugified version of the label
  userId: integer("userId")
    .references(() => users.id)
    .notNull(), // Foreign key linking to users
});

export const variables = sqliteTable("variables", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }), // Unique ID for each variable
  equationId: integer("equationId")
    .references(() => equations.id)
    .notNull(), // Foreign key linking to latexCalculators
  placeholder: text("placeholder").notNull(),
  label: text("label").notNull(),
  unit: text("unit"), // Unit of the variable (optional)
});
