# راهنمای تنظیم EmailJS برای فرم تماس

## مرحله 1: ایجاد حساب کاربری EmailJS

1. به وب‌سایت [EmailJS](https://www.emailjs.com/) بروید
2. روی "Sign Up" کلیک کنید
3. حساب کاربری خود را ایجاد کنید

## مرحله 2: تنظیم سرویس ایمیل

1. وارد پنل EmailJS شوید
2. به بخش "Email Services" بروید
3. روی "Add New Service" کلیک کنید
4. سرویس ایمیل خود را انتخاب کنید (Gmail, Outlook, Yahoo و...)
5. دستورالعمل‌ها را دنبال کنید تا سرویس را متصل کنید
6. **Service ID** را کپی کنید

## مرحله 3: ایجاد Template

1. به بخش "Email Templates" بروید
2. روی "Create New Template" کلیک کنید
3. Template زیر را استفاده کنید:

```
Subject: پیام جدید از {{from_name}}

پیام جدید از وب‌سایت شما:

نام: {{from_name}}
ایمیل: {{from_email}}

پیام:
{{message}}

---
این پیام از طریق فرم تماس وب‌سایت شما ارسال شده است.
```

4. **Template ID** را کپی کنید

## مرحله 4: دریافت Public Key

1. به بخش "Account" بروید
2. **Public Key** خود را کپی کنید

## مرحله 5: به‌روزرسانی کد

در فایل `src/components/ContactSection.jsx`، مقادیر زیر را جایگزین کنید:

```javascript
const serviceId = 'service_your_service_id'; // Service ID شما
const templateId = 'template_your_template_id'; // Template ID شما  
const publicKey = 'your_public_key'; // Public Key شما
```

## مرحله 6: تست فرم

1. فرم را پر کنید
2. روی "ارسال پیام" کلیک کنید
3. ایمیل خود را بررسی کنید

## نکات مهم:

- **رایگان**: EmailJS تا 200 ایمیل در ماه رایگان است
- **امن**: کلیدهای API شما امن هستند
- **سریع**: پیام‌ها فوراً ارسال می‌شوند
- **قابل اعتماد**: سرویس معتبر و پایداری است

## پشتیبانی:

اگر مشکلی داشتید، به [مستندات EmailJS](https://www.emailjs.com/docs/) مراجعه کنید.
