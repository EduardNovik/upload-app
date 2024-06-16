import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { documentsS3, documentsLocal } from "@upload/db-schema";

// for query purposes
const queryClient = postgres(process.env.DB_URL!);

export const db = drizzle(queryClient, {
  schema: {
    documentsS3,
    documentsLocal,
  },
});
