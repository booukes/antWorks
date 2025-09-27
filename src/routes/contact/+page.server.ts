import nodemailer from 'nodemailer';
import { fail } from '@sveltejs/kit';
import type { Actions, RequestEvent } from '@sveltejs/kit';

// ❗️ Zostawiamy import TYLKO dla usera i hasła 
import { SMTP_USER, SMTP_PASS } from '$env/static/private';

// 👇 Resztę danych wpisujemy na sztywno
const SMTP_HOST = 'smtp.gmail.com'; // 👈 WPISZ SWÓJ HOSTING
const SMTP_PORT = 465;                   // 👈 WPISZ SWÓJ PORT;

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: SMTP_PORT,
	secure: SMTP_PORT === 465,
	auth: {
		user: SMTP_USER, // Te dane nadal są bezpieczne z .env
		pass: SMTP_PASS  // Te dane nadal są bezpieczne z .env
	}
});

export const actions: Actions = {
	sendMail: async ({ request }: RequestEvent) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		if (!name || !email || !message) {
			return fail(400, {
				message: 'Wszystkie pola są wymagane.',
				success: false
			});
		}

		const mailOptions = {
			from: `"Formularz Portfolio" <${SMTP_USER}>`,
			to: SMTP_USER, // Używamy zmiennej zdefiniowanej wyżej
			subject: `Nowa wiadomość od: ${name}`,
			text: `Od: ${name} <${email}>\n\nWiadomość:\n${message}`,
			html: `<div style="font-family: 'Segoe UI', sans-serif; background: #1f1f1f; color: #ddd; padding: 20px;">
					  <div style="max-width: 600px; margin: 0 auto; background: #2c2c2c; border-radius: 12px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.5);">
					    <!-- Header -->
					    <div style="text-align: center; margin-bottom: 20px;">
					      <h1 style="margin: 0; font-size: 24px; color: #a3be8c;">New Contact Form Message</h1>
					    </div>
					    <!-- Message Info -->
					    <div style="margin-bottom: 20px;">
					      <p><strong style="color: #a3be8c;">Name:</strong> ${name}</p>
					      <p><strong style="color: #a3be8c;">Email:</strong> ${email}</p>
					    </div>
					    <!-- Message Content -->
					    <div style="background: #1f1f1f; padding: 15px; border-radius: 10px; border-left: 4px solid #a3be8c; margin-bottom: 20px;">
					      <p style="margin: 0; line-height: 1.5;">${message.replace(/\n/g, '<br>')}</p>
					    </div>
					    <!-- Footer -->
					    <div style="text-align: center; font-size: 12px; color: #888;">
					      <p>Sent from your website contact form</p>
					      <p><a href="https://yourdomain.com" style="color: #a3be8c; text-decoration: none;">Visit your site</a></p>
					    </div>
					  </div>
					</div>`
		};

		try {
			await transporter.sendMail(mailOptions);
			return {
				message: 'Wiadomość została wysłana pomyślnie!',
				success: true
			};
		} catch (error) {
			console.error('Błąd przy wysyłaniu maila:', error);
			return fail(500, {
				message: 'Nie udało się wysłać wiadomości z powodu błędu serwera.',
				success: false
			});
		}
	}
};