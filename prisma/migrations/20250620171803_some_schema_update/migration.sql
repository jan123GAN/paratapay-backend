/*
  Warnings:

  - Added the required column `left_at` to the `group_members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "group_members" ADD COLUMN     "left_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "joined_at" SET DEFAULT CURRENT_TIMESTAMP;
