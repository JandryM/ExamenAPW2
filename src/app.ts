import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

const createBus = async () =>{
    const busCreate = await prisma.busModel.create({
        data:{
            busNumber: 3,
            brand: "carro",
            model: "aveo",
            capacity: 50,
            route:{
                create:{
                    start: "Manta",
                    destination: "Montecristi",
                    distance: 50,
                }
            }
        }
    })
    console.log(busCreate)
}

const deleteBus = async () => {
    const bus = await prisma.busModel.delete({
        where: {
            id: 1
        }
    });
}

(async ()=>{
    await deleteBus()
    // console.log("Bus creado")
    // prisma.$disconnect()
}) ()















