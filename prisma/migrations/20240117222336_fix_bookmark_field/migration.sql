/*
  Warnings:

  - You are about to drop the column `ling` on the `Bookmark` table. All the data in the column will be lost.
  - Added the required column `link` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmark" DROP COLUMN "ling",
ADD COLUMN     "link" TEXT NOT NULL;
