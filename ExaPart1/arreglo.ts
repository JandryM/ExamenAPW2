import { IBus, IRoute } from "./Interfaces";

const bus : IBus[] = [
    {
        id: 1,
        busNumber: 1,
        brand: "carro",
        model: "3-20",
        capacity: 100,
        routes:[
            {
                id: 1,
                start: "Ceibo Renacer",
                destination: "El Centro",
                distance: 10,
                busId:1,
            },
        ]
    },
    {
        id: 2,
        busNumber: 2,
        brand: "auto",
        model: "ford",
        capacity: 100,
        routes:[
            {
                id: 2,
                start: "Manta ",
                destination: "Guayaquil",
                distance: 150,
                busId:2,
            },
        ]
    },
    {
        id: 3,
        busNumber: 3,
        brand: "carro",
        model: "aveo",
        capacity: 50,
        routes:[
            {
                id: 3,
                start: "Manta",
                destination: "Montecristi",
                distance: 50,
                busId:3,
            },
        ]
    },
]



function eliminarID(id:number, bus: IBus[], callback:(result:any)=>void){
    const filtrar = bus.forEach (
        (arreglo:IBus) => {return arreglo.id = 3}
    )
}
eliminarID (1, bus,(resultado)=>{
    console.log("Resultado",resultado)
})


































