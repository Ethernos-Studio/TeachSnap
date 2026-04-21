import React from 'react';

const ClassroomPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">教随堂</h2>
        <p className="text-gray-600">替代「班级优化大师」核心功能，零硬件成本激活课堂</p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="font-medium mb-4">积分银行</h3>
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-success text-white py-3 px-4 rounded-lg font-medium">+1</button>
            <button className="bg-danger text-white py-3 px-4 rounded-lg font-medium">-1</button>
            <button className="bg-secondary text-white py-3 px-4 rounded-lg font-medium">自定义</button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="font-medium mb-4">课堂工具</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium">公平抽人</button>
            <button className="bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium">小组PK</button>
            <button className="bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium">倒计时</button>
            <button className="bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium">噪音监测</button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">学生列表</h3>
          <div className="text-gray-500 text-sm">暂无学生记录</div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPage;