# EmailJS Setup Guide

Your EmailJS credentials are already configured in ContactSection.jsx:
- **Public Key**: Xt63LbRH8vaB5Nw83
- **Service ID**: service_btvjibu
- **Template ID**: template_zglrq6l

## Troubleshooting Steps

### 1. Check Your Email Template
Go to https://www.emailjs.com/dashboard:
- Click on "Templates"
- Find template `template_zglrq6l`
- Make sure your email template body includes these variables:
  ```
  Name: {{from_name}}
  Email: {{from_email}}
  Message: {{message}}
  ```

### 2. Verify Gmail Authorization
- Go to https://www.emailjs.com/dashboard
- Click "Email Services"
- Click on your Gmail service
- Check the "Connection Status" - it should show "✓ Connected"
- If not connected, click "Connect Email" and authorize Gmail again

### 3. Check Email Recipient
- In your template settings, verify that the "To Email" field is set to: `danialnazim8@gmail.com`
- OR use the variable `{{to_email}}` in the "To Email" field

### 4. Test the Form
1. Go to http://localhost:5173/
2. Scroll to "Contact" section
3. Fill in the form with:
   - Name: Test Name
   - Email: your.email@gmail.com
   - Message: Test message
4. Click "Send Message"
5. Check your spam/junk folder in Gmail

### 5. Check Browser Console for Errors
1. Open DevTools (F12 or Ctrl+Shift+I)
2. Go to Console tab
3. Submit the form again
4. Look for any error messages

## Common Issues

### Email still not received?
- **Check spam folder**: Gmail might filter it as spam
- **Verify service ID**: Make sure `service_btvjibu` exists in your EmailJS dashboard
- **Verify template ID**: Make sure `template_zglrq6l` exists
- **Check account limits**: Free EmailJS tier has 200 emails/month

### Form shows "Error: Failed to send message"
- Public Key is incorrect
- Service ID doesn't exist
- Template ID doesn't exist
- Email service is not connected to Gmail

## Need Help?
Check EmailJS docs: https://www.emailjs.com/docs/
