-- CreateTable
CREATE TABLE "busModel" (
    "id" SERIAL NOT NULL,
    "busNumber" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "busModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routeModel" (
    "id" SERIAL NOT NULL,
    "start" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "busId" INTEGER NOT NULL,

    CONSTRAINT "routeModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "routeModel" ADD CONSTRAINT "routeModel_busId_fkey" FOREIGN KEY ("busId") REFERENCES "busModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
