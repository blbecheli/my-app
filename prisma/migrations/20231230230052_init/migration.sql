-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Friend" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "friendId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reciprocal" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Friend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Friend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Friend" ("friendId", "id", "reciprocal", "userId") SELECT "friendId", "id", "reciprocal", "userId" FROM "Friend";
DROP TABLE "Friend";
ALTER TABLE "new_Friend" RENAME TO "Friend";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
