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
		const subject = formData.get('subject') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		if (!name || !subject || !email || !message) {
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
			html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';">
    <div style="background-color: #121212; width: 100%; padding: 40px 0;" align="center">
        <div style="max-width: 600px; width: 100%; background-color: #1a1a2e; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #6b46c1;">
            <!-- Header Section -->
            <div style="padding: 40px 20px 20px 20px; text-align: center; border-bottom: 1px solid #3c3c5a;">
                <h1 style="margin: 0; color: #9f7aea; font-size: 24px; font-weight: 600; letter-spacing: 1px;">New Submission Received</h1>
                <p style="margin: 5px 0 0 0; color: #a0aec0; font-size: 16px;">Incoming transmission from your website.</p>
            </div>
            
            <!-- Content Section -->
            <div style="padding: 30px 40px;">
                <!-- Sender's Details -->
                <p style="margin: 0 0 15px 0; color: #9f7aea; font-size: 24px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.8px;">Sender Details</p>
                <div style="color: #cbd5e0;">
                    <div style="display: flex; justify-content: space-between; font-size: 24px; padding: 12px 0; border-bottom: 1px solid #3c3c5a;">
                        <strong style="color: #f7fafc;">Name: </strong>
                        <span>${name}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 24px; padding: 12px 0; border-bottom: 1px solid #3c3c5a;">
                        <strong style="color: #f7fafc;">Email: </strong>
                        <a href="mailto:"${email} style="color: #81e6d9; text-decoration: none;">${email}</a>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 24px; padding: 12px 0;">
                        <strong style="color: #f7fafc;">Subject: </strong>
                        <span>${subject}</span>
                    </div>
                </div>

                <!-- Message Content -->
                <p style="margin: 40px 0 15px 0; color: #9f7aea; font-size: 24px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.8px;">Message</p>
                <div style="padding: 20px; background-color: #121212; border-radius: 6px; border: 1px solid #3c3c5a;">
                    <p style="margin: 0; color: #e2e8f0; font-size: 16px; line-height: 1.6;">
                        ${message.replace(/\n/g, '<br>')}
                    </p>
                </div>
            </div>
            
            <!-- Footer Section -->
            <div style="padding: 20px 40px; text-align: center; border-top: 1px solid #3c3c5a;">
                <p style="margin: 0; color: #718096; font-size: 12px;">This email was sent automatically via nodeMailer.</p>
            </div>
        </div>
    </div>
</body>
</html>

`
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