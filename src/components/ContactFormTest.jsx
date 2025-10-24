import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// این کامپوننت برای تست فرم تماس است
export const ContactFormTest = () => {
  const [testResult, setTestResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const testEmailJS = async () => {
    setIsLoading(true);
    setTestResult('در حال تست...');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      const templateParams = {
        from_name: 'تست فرم',
        from_email: 'test@example.com',
        message: 'این یک پیام تست است.',
        to_email: 'erfan.bayaat82@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setTestResult('✅ تست موفق! EmailJS به درستی پیکربندی شده است.');
    } catch (error) {
      console.error('Test error:', error);
      setTestResult(`❌ خطا در تست: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">تست فرم تماس</h3>
      <p className="text-sm text-gray-600 mb-4">
        این بخش فقط برای تست است و در نسخه نهایی حذف خواهد شد.
      </p>
      
      <button
        onClick={testEmailJS}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'در حال تست...' : 'تست EmailJS'}
      </button>
      
      {testResult && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
          {testResult}
        </div>
      )}
    </div>
  );
};

export default ContactFormTest;
