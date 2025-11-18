import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:content";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres.")
        .max(100, "El nombre no puede exceder los 100 caracteres."),
      email: z.string().email("El correo electrónico no es válido."),
      message: z
        .string()
        .min(10, "El mensaje debe tener al menos 10 caracteres.")
        .max(1000, "El mensaje no puede exceder los 1000 caracteres."),
    }),
    handler: async ({ name, email, message }) => {
      const { data, error } = await resend.emails.send({
        from: "Portafolio <onboarding@resend.dev>",
        to: ["kevinshe01@gmail.com"],
        subject: "🔥 CONTACTO - Portafolio Kevin Hernández",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d62828;">Nuevo mensaje desde mi portafolio</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mensaje:</strong></p>
              <div style="
                background: white; 
                padding: 15px; 
                border-radius: 4px; 
                margin-top: 10px;
                white-space: pre-wrap;
                word-wrap: break-word;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.5;
              ">
                ${message}
              </div>
            </div>
          </div>
        `,
      });
      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
