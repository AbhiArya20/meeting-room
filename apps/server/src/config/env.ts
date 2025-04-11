import { debug } from "console";
import { z } from "zod";

// TODO: Make this more strict
const envZodSchema = z
  .object({
    WORKER_LOG_LEVEL: z
      .enum(["debug", "info", "warn", "error"])
      .default("debug"),
    WORKER_LOG_TAGS: z.string(),
    WORKER_MIN_RTC_PORT: z.number().min(0).max(65535),
    WORKER_MAX_RTC_PORT: z.number().min(0).max(65535),
    WORKER_CERT_FULL_CHAIN: z.string(),
    WORKER_CERT_PRIVATE_KEY: z.string(),
    WORKER_LIB_WEBRTC_FIELD_TRIALS: z.string(),
    WORKER_DISABLE_LIB_URING: z.boolean(),
    WORKER_MAX_COUNT: z.number(),
  })
  .readonly();

const { error, data } = envZodSchema.safeParse(process.env);

if (error) {
  console.log(error);

  process.exit(1);
}

const env = data;

export { env };
