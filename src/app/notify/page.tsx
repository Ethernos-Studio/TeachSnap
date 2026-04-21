import React from 'react';

const NotifyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">教随联</h2>
        <p className="text-gray-600">一键生成人话，替代教师手写/复制粘贴</p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="font-medium mb-4">周报自动生成</h3>
          <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium mb-3">
            生成班级简报
          </button>
          <button className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium">
            复制到微信群
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="font-medium mb-4">个人通知</h3>
          <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium mb-3">
            温和版
          </button>
          <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium">
            直接版
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">海报生成</h3>
          <button className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium">
            本周之星海报
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotifyPage;