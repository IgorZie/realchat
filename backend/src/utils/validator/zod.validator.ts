import { z } from "zod";
import { BadRequestError } from "../../errors/Errors";

export function zodValidator(schema: z.ZodSchema, data: any){
    try {
        return schema.parse(data)
    } catch(error){
        if (error instanceof z.ZodError) {
            const mapErrors = error?.errors?.map(err => err.message)
            throw new BadRequestError({
                details: mapErrors
            })
        }
    }

}