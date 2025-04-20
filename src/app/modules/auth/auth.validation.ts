import { z } from "zod";

const LoginValidationSchema = z.object({
    body : z.object({
        email : z.string({required_error : "email is required"}).email(),
        password : z.string({required_error : "password is required"}),
    }),
})


export const authValidation = {
    LoginValidationSchema
}