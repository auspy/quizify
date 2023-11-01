-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(30) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exams" (
    "examId" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" UUID NOT NULL,
    "type" VARCHAR NOT NULL,
    "subject" VARCHAR NOT NULL,
    "subjectCode" VARCHAR,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("examId")
);

-- CreateTable
CREATE TABLE "questions" (
    "quesId" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "examId" BIGINT NOT NULL,
    "ques" TEXT NOT NULL,
    "type" VARCHAR NOT NULL,
    "correct" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("quesId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "questions_quesId_key" ON "questions"("quesId");

-- AddForeignKey
ALTER TABLE "exams" ADD CONSTRAINT "exams_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_examId_fkey" FOREIGN KEY ("examId") REFERENCES "exams"("examId") ON DELETE NO ACTION ON UPDATE NO ACTION;

