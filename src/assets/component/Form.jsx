import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [salary, setSalary] = useState('');
  const [reason, setReason] = useState('');
  const [firstQuestion, setFirstQuestion] = useState('');
  const [secondQuestion, setSecondQuestion] = useState('');
  const [thirdQuestion, setThirdQuestion] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!name.trim() || name.trim().length < 4) {
      newErrors.name = 'الاسم يجب أن يكون أكثر من 3 أحرف';
      isValid = false;
    }

    if (!age) {
      newErrors.age = 'الرجاء تحديد العمر';
      isValid = false;
    }

    if (!city) {
      newErrors.city = 'الرجاء تحديد المدينة';
      isValid = false;
    }

    if (!salary) {
      newErrors.salary = 'الرجاء تحديد الراتب';
      isValid = false;
    }

    if (!reason.trim() || reason.trim().length < 10) {
      newErrors.reason = 'يجب أن يحتوي على 10 حروف على الأقل';
      isValid = false;
    }

    if (!firstQuestion || !secondQuestion || !thirdQuestion) {
      newErrors.questions = 'الرجاء تعبئة جميع الحقول';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitBtn = (e) => {
    e.preventDefault();
    if (validate()) {
      const data = {
        name,
        age,
        city,
        salary,
        reason,
        firstQuestion,
        secondQuestion,
        thirdQuestion,
      };
    
       const savedData = JSON.parse(localStorage.getItem('applications') || '[]');
       savedData.push(data);
       localStorage.setItem('applications', JSON.stringify(savedData));
 
       navigate('/answers');
     }
   };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center p-6">
      <form
        onSubmit={submitBtn}
        className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">  التقديم على الوظيفة</h1>
        <h1 className="text-sm semibold  text-gray-800 underline"> جميع الحقول مطلوبة</h1>
        <div>
          <label className="block text-sm  font-medium text-gray-700 mb-1">الاسم</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

       
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">العمر</label>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`w-full border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
          >
            <option value="">اختر العمر</option>
            {[...Array(53)].map((_, i) => (
              <option key={i + 18} value={i + 18}>
                {i + 18}
              </option>
            ))}
          </select>
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>

    
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">المدينة</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
          >
            <option value="">اختر المدينة</option>
            <option value="الرياض">الرياض</option>
            <option value="جدة">جدة</option>
            <option value="الخبر">الخبر</option>
            <option value="مكة">مكة</option>
            <option value="ابها">ابها</option>
            <option value="جازان">جازان</option>
            <option value="ينبع">ينبع</option>
            <option value="المدينة">المدينة المنورة</option>
            <option value="الدمام"> الدمام </option>

          </select>
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">الراتب المتوقع</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="salary"
                value="3000-8000"
                checked={salary === '3000-8000'}
                onChange={() => setSalary('3000-8000')}
              />
              <p>من 3000 إلى 8000</p>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="salary"
                value="9000-13000"
                checked={salary === '9000-13000'}
                onChange={() => setSalary('9000-13000')}
              />
              <p>من 9000 إلى 13000</p>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="salary"
                value="15000+"
                checked={salary === '15000+'}
                onChange={() => setSalary('15000+')}
              />
              <p>15000 وأعلى</p>
            </label>
          </div>
          {errors.salary && <p className="text-red-500 text-sm mt-1">{errors.salary}</p>}
        </div>

     
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">لماذا تريد التقديم لهذه الوظيفة؟</label>
          <textarea
            rows="4"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className={`w-full border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`}
          ></textarea>
          {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
        </div>


        <div>

       

            <div className="flex-col items-center">
              <p>هل لديك خبرة سابقة؟</p><br />
              <label><input type="radio" name="q1" value="yes" checked={firstQuestion === 'yes'} onChange={() => setFirstQuestion('yes')} /> نعم</label> <br />
              <label><input type="radio" name="q1" value="no" checked={firstQuestion === 'no'} onChange={() => setFirstQuestion('no')} /> لا</label>
            </div>

            <div className="flex-col items-center gap-2">
              <p>هل يمكنك العمل تحت ضغط؟</p> <br />
              <label><input type="radio" name="q2" value="yes" checked={secondQuestion === 'yes'} onChange={() => setSecondQuestion('yes')} /> نعم</label> <br />
              <label><input type="radio" name="q2" value="no" checked={secondQuestion === 'no'} onChange={() => setSecondQuestion('no')} /> لا</label>
            </div>

            <div className="flex-col items-center gap-2">
              <p>هل أنت على استعداد للعمل لساعات إضافية؟</p> <br />
              <label><input type="radio" name="q3" value="yes" checked={thirdQuestion === 'yes'} onChange={() => setThirdQuestion('yes')} /> نعم</label><br />
              <label><input type="radio" name="q3" value="no" checked={thirdQuestion === 'no'} onChange={() => setThirdQuestion('no')} /> لا</label>
            </div>

            {errors.questions && <p className="text-red-500 text-sm mt-1">{errors.questions}</p>}
          </div>
      

  
        <button
          type="submit"
          className="w-full py-2 bg-blue-300 hover:bg-blue-500 text-black font-semibold rounded-lg transition"
        >
          ارسال الطلب
        </button>
      </form>
    </div>
  );
}