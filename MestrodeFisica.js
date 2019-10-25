const {Maestro} = required("./Maestro")

class MaestrodeFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
        super(materia, calificaciones)
        this.antiguedad = antiguedad
    }
}