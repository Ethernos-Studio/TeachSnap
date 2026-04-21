import React from 'react';

const AnalyzePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">教随看</h2>
        <p className="text-gray-600">零额外操作，自动聚合所有模块数据，生成可行动的洞察</p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="font-medium mb-4">班级仪表盘</h3>
          <div className="text-gray-500 text-sm mb-4">近4周知识点错误率热力图</div>
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">热力图</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="font-medium mb-4">高频错误榜</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>分数除法</span>
              <span className="text-danger">42%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>进位加法</span>
              <span className="text-danger">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>语法错误</span>
              <span className="text-danger">28%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">个人错题本</h3>
          <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium">
            选择学生导出
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyzePage;