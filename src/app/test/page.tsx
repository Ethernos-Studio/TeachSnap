import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">教随测</h2>
        <p className="text-gray-600">勾选知识点，30秒生成可直接打印的A4试卷</p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="font-medium mb-4">智能组卷</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="math" className="w-5 h-5" />
              <label htmlFor="math">数学</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="chinese" className="w-5 h-5" />
              <label htmlFor="chinese">语文</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="english" className="w-5 h-5" />
              <label htmlFor="english">英语</label>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium mt-4">
            生成试卷
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">组卷历史</h3>
          <div className="text-gray-500 text-sm">暂无组卷记录</div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;