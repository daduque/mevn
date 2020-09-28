import moongose, {Schema} from 'mongoose';

const ingresoSchema = new Scheman({
    usuario: {type: Schema.ObjectId, ref: 'usuario', required: true},
    persona: {type: Schema.ObjectId, ref: 'persona', required: true},
    tipo_comprobante: {type: String, maxlength: 20, required: true},
    serie_comprobante: {type: String, maxlength: 20, required: true},
    num_comprobante: {type: String, maxlength: 20, required: true},
    impuesto: {type: Number, required: true},
    total: {type: Number, required: true},
    detalles: [{
        id: {
            type: String,
            required: true
        },
        articulo: {
            type: String,
            required: true,
        },
        cantidad: {
            type: Number,
            required: true
        },
        precio: {
            type: Number,
            required: true
        }
    }],
    estado: {type: Number, default: 1},
    createdAt: {type: Date, default: Date.now}
});

const Ingreso = moongose.model('ingreso', ingresoSchema);

export default Ingreso;