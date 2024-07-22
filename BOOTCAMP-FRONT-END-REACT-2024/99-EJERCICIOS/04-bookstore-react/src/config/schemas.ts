import { z } from 'zod';

//* USER
const passwordPattern = /^(?![0-9]{6})[0-9a-zA-Z]{4,8}$/;

const globalUserSchema = z.object({
  name: z.string().min(1, 'Campo obligatorio').min(4, 'Mínimo 4 caracteres').max(12, 'Máximo 12 caracteres'),
  surname: z.string().min(1, 'Campo obligatorio').min(4, 'Mínimo 4 caracteres').max(20, 'Máximo 20 caracteres'),
  email: z.string().email('Email no válido'),
  photo: z.string().url('URL no válida'),
  password: z.string().refine((value) => passwordPattern.test(value), { message: 'Contraseña inválida' })
});

const registerSchema = globalUserSchema.extend({
  repeatPassword: z.string()
}).refine(values => values.password === values.repeatPassword,
  {
    message: 'Las contraseñas no coinciden',
    path: ['repeatPassword']
  });

const profileSchema = globalUserSchema.omit({ password: true });
const loginSchema = globalUserSchema.omit({ name: true, surname: true, photo: true });

//* BOOK

const globalBookSchema = z.object({
  title: z.string().min(1, 'Campo obligatorio').min(4, 'Mínimo 4 caracteres').max(50, 'Máximo 50 caracteres'),
  author: z.string().min(1, 'Campo obligatorio').min(4, 'Mínimo 4 caracteres').max(50, 'Máximo 50 caracteres'),
  type: z.string().min(1, 'Campo obligatorio').min(4, 'Mínimo 4 caracteres').max(12, 'Máximo 12 caracteres'),
  photo: z.string().url().min(1, 'Campo obligatorio').min(4, 'Mínimo 4 caracteres'),
  price: z.coerce.number().min(0, 'Lo mínimo que puede ser es GRATIS').max(100, 'Máximo 100€')
});

//* TIPOS NUEVOS
type RegisterFormData = z.infer<typeof registerSchema>;
type ProfileFormData = z.infer<typeof profileSchema>;
type LoginFormData = z.infer<typeof loginSchema>;
type BookFormData = z.infer<typeof globalBookSchema>;

export { registerSchema, profileSchema, loginSchema, globalBookSchema };

export type { RegisterFormData, ProfileFormData, LoginFormData, BookFormData };
