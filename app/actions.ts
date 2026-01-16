"use server"

import db from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function submitContact(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to send message.",
        }
    }

    const { name, email, message } = validatedFields.data

    try {
        const stmt = db.prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)")
        stmt.run(name, email, message)

        revalidatePath("/Mju39s8f323sd98234j29fd8s7fwe8974358972435897243589u7239845789234578923457893245789342758932457893425789/messages")
        return { success: true, message: "Message sent successfully!" }
    } catch (error) {
        console.error("Database Error:", error)
        return {
            message: "Database Error: Failed to send message.",
        }
    }
}
