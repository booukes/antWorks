import nodemailer from 'nodemailer';
import { fail } from '@sveltejs/kit';
import type { Actions, RequestEvent } from '@sveltejs/kit';

import { SMTP_USER, SMTP_PASS } from '$env/static/private';

const SMTP_HOST = 'smtp.gmail.com'; 
const SMTP_PORT = 465; 

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: SMTP_PORT,
	secure: SMTP_PORT === 465,
	auth: {
		user: SMTP_USER, 
		pass: SMTP_PASS  
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
			from: `"antWorks Nodemailer" <${SMTP_USER}>`,
			to: SMTP_USER,
			subject: `nodemailer: New message from: ${name}`,
			text: `Od: ${name} <${email}>\n\nMessage:\n${message}`,
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
					      <p>Sent from antWorks via nodemailer</p>
					      <p><a href="https://antworks.vercel.app" style="color: #a3be8c; text-decoration: none;">Visit sending website</a></p>
					    </div>
					  </div>
					</div>`
		};

		try {
			await transporter.sendMail(mailOptions);
			return {
				message: 'Message sent via nodemailer! Thank you for contacting me.',
				success: true
			};
		} catch (error) {
			console.error('An error occured. Contact website administrator at lukaszandrzejpilat@gmail.com.:', error);
			return fail(500, {
				message: 'A server error occured. Contact website administrator at lukaszandrzejpilat@gmail.com please.',
				success: false
			});
		}
	}
};