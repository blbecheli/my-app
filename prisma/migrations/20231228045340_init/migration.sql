/*
  Warnings:

  - Added the required column `searchId` to the `Search` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Search" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "searchId" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "idPost" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Search" ("createdAt", "id", "idPost", "idUser") SELECT "createdAt", "id", "idPost", "idUser" FROM "Search";
DROP TABLE "Search";
ALTER TABLE "new_Search" RENAME TO "Search";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
