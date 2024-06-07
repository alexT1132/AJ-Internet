import { z } from "zod";

export const registerSchema = z.object({
    nombre: z.string({
        required_error: "El nombre es requerido",
    }),
    puesto: z.string({
        required_error: "Puesto requerido",
    }),
    no_trabajador: z.string({
        required_error: "NUmero requerido",
    }),
    contraseña: z.string({
        required_error: "Contraseña requerida",
    }),
    role: z.string({
        required_error: "role requerido",
    }),
});

export const loginSchema = z.object({
    no_trabajador: z.string({
        required_error: "Numero requerido",
    }),
    contraseña: z.string({
        required_error: "Contraseña requerida",
    }),
})