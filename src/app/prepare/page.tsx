import React from 'react';

const PreparePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">教随备</h2>
        <p className="text-gray-600">基于真实错题数据，10分钟生成可直接使用的补救教案</p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="font-medium mb-4">智能备课</h3>
          <div className="text-gray-500 text-sm mb-4">本周分数除法错误率 42%，是否生成专项教案？</div>
          <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium">
            生成专项教案
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">手动备课</h3>
          <button className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium mb-3">
            输入课题
          </button>
          <button className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium">
            导入教案
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreparePage;