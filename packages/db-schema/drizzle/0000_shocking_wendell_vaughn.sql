CREATE TABLE IF NOT EXISTS "documentsBytea" (
	"id" uuid PRIMARY KEY NOT NULL,
	"documentName" text NOT NULL,
	"owner" text NOT NULL,
	"tag" text NOT NULL,
	"file" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "documents" (
	"id" uuid PRIMARY KEY NOT NULL,
	"documentName" text NOT NULL,
	"owner" text NOT NULL,
	"tag" text NOT NULL,
	"key" text NOT NULL,
	"url" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
