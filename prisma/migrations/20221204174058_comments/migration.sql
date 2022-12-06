-- CreateTable
CREATE TABLE "Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "srcImage" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
