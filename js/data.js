// Declaracion de Clase, creacion de objetos y array de Pokemon

class Danza {
    constructor(id, nombre, departamento, provincia, distrito, reseña, alquiler, venta, imagen) {
        this.id = id
        this.nombre = nombre
        this.departamento = departamento
        this.provincia = provincia
        this.distrito = distrito
        this.reseña = reseña
        this.alquiler = alquiler
        this.venta = venta
        this.imagen = imagen
      
    }
}

//47

// tamaño de imagenes (600*400)
const danza1 = new Danza(
    '001',
    'Wasichacuy de Antabamba',
    'Apurimac',
    'Antabamba',
    'Antabamba',
    'Danza costumbrista que representa las costumbres que nos dejó nuestros antepasados como el techado de la casa, en donde participa toda una comunidad entera en una forma mancomunada practicando el AYNI o reciprocidad',
    10,
    200,
    '../imagenes/vestimentas/wasichacuy_de_antabamba.jpg')

const danza2 = new Danza (
    '002',
    'Chaku de Vicuñas',
    'Junin',
    'Tarma',
    'San Pedro de Cajas',
    'San pedro de cajas cuenta con cuatro barrios la cuales se denominan de la siguiente manera, barrio primero, barrio segundo, barrio tercero y barrio cuarto  los cuales son representados por los sus autoridades políticos y comuneros.Existe una  comisión encargada de velar por la actividad e ingresos que produce por la venta de fibra de lana de vicuña son los denominados comités de vicuñas representativas de san pedro de cajas',
    12,
    300,
    '../imagenes/vestimentas/chaku_de_vicuñas.jpg'
)

const danza3 = new Danza (
    '003',
    'Luriguayos',
    'Tacna',
    '***',
    '***',
    'Los luriguayos es un baile Aymara, que se caracteriza por el sonido del chillido de los moseños , que son flautas considerables. En la indumentaria se destaca el “aguayo”. Además, de ahí proviene el nombre de la danza. El aguayo es una manta con fundamentos andinos. El baile es muy ágil ya que se está en recurrente saltos y giros.',
    14,
    250,
    '../imagenes/vestimentas/luriguayos.jpg'
)


