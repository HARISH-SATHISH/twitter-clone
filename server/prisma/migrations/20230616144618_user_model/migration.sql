-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");
