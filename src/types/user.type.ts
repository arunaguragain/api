import z from 'zod';

export const UserSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z.string().min(6),
    role: z.enum(['admin', 'donor', 'volunteer']).default('donor'),
});
export type UserType = z.infer<typeof UserSchema>;