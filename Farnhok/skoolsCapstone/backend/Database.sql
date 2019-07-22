CREATE TABLE "admin" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "school_users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON COLUMN "school_users"."created_at" IS 'When order created';

CREATE TABLE "school_contact_info" (
  -- "id" SERIAL PRIMARY KEY,
  "school_id" int, --(PK and FK)
  "website" varchar,
  "address" varchar,
  "phone" varchar,
  "email" varchar,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON COLUMN "school_contact_info"."created_at" IS 'When order created';

CREATE TABLE "school_details" (
  -- "id" SERIAL PRIMARY KEY,
  "school_id" int, --(PK and FK)
  "profile_pic" varchar,
  "school_name" varchar,
  "location" varchar,
  "am_stui9dent" int,
  "pm_student" int,
  "full_day_student" int,
  "long_full_day_student" int,
  "half_day_tuition" int,
  "full_day_tuition" int,
  "long_full_day_tuition" int,
  "has_subsidy" boolean,
  "subsidy_amt" int,
  "has_am" boolean,
  "has_pm" boolean,
  "has_full_day" boolean,
  "has_long_full_day" boolean,
  "description" varchar,
  "no_of_teacher" int,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "school_details"."created_at" IS 'When order created';

CREATE TABLE "school_video" (
  -- "id" SERIAL PRIMARY KEY,
  "school_id" int, --cannot because this is one to many relationship
  "video" varchar,
  "is_posted" boolean,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "school_video"."created_at" IS 'When order created';

CREATE TABLE "school_photo" (
  -- "id" SERIAL PRIMARY KEY,
  "school_id" int, --cannot because this is one to many
  "photo" varchar,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "school_photo"."created_at" IS 'When order created';

CREATE TABLE "school_event" (
  "id" SERIAL PRIMARY KEY,
  "school_id" int,
  "event_poster" varchar,
  "event_date" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "event_description" varchar,
  "event_venue" varchar,
  "is_free" boolean,
  "event_name" varchar,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "school_event"."created_at" IS 'When order created';

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "first_name" varchar,
  "last_name" varchar,
  "facebook_id" varchar,
  "access_token" varchar,
  "profile_pic" varchar,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "update_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "users"."created_at" IS 'When order created';

CREATE TABLE "event_signup" (
  "id" SERIAL PRIMARY KEY,
  "event_id" int,
  "user_id" int,
  "is_interested" boolean,
  "is_attending" boolean,
  "user_email" varchar,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "update_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "event_signup"."created_at" IS 'When order created';

CREATE TABLE "social_card" (
  "id" SERIAL PRIMARY KEY,
  "school_id" int,
  "card_content" varchar,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "update_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "social_card"."created_at" IS 'When order created';

CREATE TABLE "social_card_photo" (
  "id" SERIAL PRIMARY KEY,
  "school_id" int
  "card_id" int,
  "photo" varchar,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "social_card_photo"."created_at" IS 'When order created';

CREATE TABLE "social_card_video" (
  "id" SERIAL PRIMARY KEY,
  "school_id" int
  "card_id" int,
  "video" varchar,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "social_card_video"."created_at" IS 'When order created';

CREATE TABLE "review" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "school_id" int,
  "comment_content" varchar,
  "score_param_1" int,
  "score_param_2" int,
  "score_param_3" int,
  "teaching_style" varchar,
  "is_reported" boolean,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  "update_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON COLUMN "review"."created_at" IS 'When order created';

CREATE TABLE "user_follow_school" (
  "id" SERIAL PRIMARY KEY,
  "school_id" int,
  "user_id" int,
  "notification_off" int
);

ALTER TABLE "school_contact_info" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "school_details" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "school_video" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "school_photo" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "school_event" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "event_signup" ADD FOREIGN KEY ("event_id") REFERENCES "school_event" ("id");

ALTER TABLE "event_signup" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "social_card" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "social_card_photo" ADD FOREIGN KEY ("card_id") REFERENCES "social_card" ("id");

ALTER TABLE "social_card_photo" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "social_card_video" ADD FOREIGN KEY ("card_id") REFERENCES "social_card" ("id");

ALTER TABLE "social_card_video" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "review" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "review" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "user_follow_school" ADD FOREIGN KEY ("school_id") REFERENCES "school_users" ("id");

ALTER TABLE "user_follow_school" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");