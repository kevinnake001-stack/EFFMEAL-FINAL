CREATE TABLE "Customer" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"user_name" text NOT NULL,
	"email_address" text NOT NULL,
	"password" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Shop" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"owner_name" text NOT NULL,
	"shop_name" text NOT NULL,
	"email_address" text NOT NULL,
	"password" text NOT NULL,
	"phone_number" text NOT NULL,
	"map_address" text,
	"open_time" timestamp,
	"close_time" timestamp
);
