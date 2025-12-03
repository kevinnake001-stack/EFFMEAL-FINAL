import { time } from "drizzle-orm/mysql-core";
import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

export const customerTable = pgTable("Customer", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    userName: text("user_name").notNull(),
    emailAddress: text("email_address").notNull(),
    password: text("password").notNull(),
    phoneNumber: text("phone_number").notNull(),
        
});

export const shopTable = pgTable("Shop", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    ownerName: text("owner_name").notNull(),
    shopName: text("shop_name").notNull(),
    emailAddress: text("email_address").notNull(),
    password: text("password").notNull(),
    phoneNumber: text("phone_number").notNull(),
    mapAddress: text("map_address"),
    openTime: timestamp("open_time"),
    closeTime: timestamp("close_time"),
});