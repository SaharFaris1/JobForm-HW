import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const applications = JSON.parse(localStorage.getItem('applications')) || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">جميع الطلبات</h1>

       

        <div className="space-y-6">
          {applications.map((app, index) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg bg-gray-50">
              <p><strong>الاسم:</strong> {app.name}</p>
              <p><strong>العمر:</strong> {app.age}</p>
              <p><strong>المدينة:</strong> {app.city}</p>
              <p><strong>الراتب المتوقع:</strong> {app.salary}</p>
              <p><strong>السبب:</strong> {app.reason}</p>
              <p><strong>هل لديك خبرة سابقة؟</strong> {app.firstQuestion === 'yes' ? 'نعم' : 'لا'}</p>
              <p><strong>هل يمكنك العمل تحت ضغط؟</strong> {app.secondQuestion === 'yes' ? 'نعم' : 'لا'}</p>
              <p><strong>هل ستقبل العمل لساعات إضافية؟</strong> {app.thirdQuestion === 'yes' ? 'نعم' : 'لا'}</p>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
}