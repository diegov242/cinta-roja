const {Maestro} = required("./Maestro")

class MaestrodeMusica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
        super(materia, calificaciones)
        this.antiguedad = antiguedad
    }
}