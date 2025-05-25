import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Answers() {
  const navigate = useNavigate();
  const applications = JSON.parse(localStorage.getItem('applications')) || [];

  const lastApplication = applications[applications.length - 1];


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">تم استلام طلبك</h1>

        <div className="space-y-4">
          <p><strong>الاسم:</strong> {lastApplication.name}</p>
          <p><strong>العمر:</strong> {lastApplication.age} سنة</p>
          <p><strong>المدينة:</strong> {lastApplication.city}</p>
          <p><strong>الراتب المتوقع:</strong> {lastApplication.salary}</p>
          <p><strong>السبب:</strong> {lastApplication.reason}</p>
          <p><strong>هل لديك خبرة سابقة؟</strong> {lastApplication.firstQuestion === 'yes' ? 'نعم' : 'لا'}</p>
          <p><strong>هل يمكنك العمل تحت ضغط؟</strong> {lastApplication.secondQuestion === 'yes' ? 'نعم' : 'لا'}</p>
          <p><strong>هل تستطيع العمل لساعات إضافية؟</strong> {lastApplication.thirdQuestion === 'yes' ? 'نعم' : 'لا'}</p>
        </div>

        <div className="flex gap-4 mt-6">
         
          <button
            onClick={() => navigate('/form')}
            className="w-full py-2 bg-blue-400 hover:bg-blue-400 text-white font-semibold rounded-md"
          >
            العودة
          </button>
        </div>
      </div>
    </div>
  );
}