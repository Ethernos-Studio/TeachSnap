import React from 'react';

const PresentPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">教随演</h2>
        <p className="text-gray-600">教案/数据一键转为可下载的.pptx课件，AI自主设计每一页</p>
      </div>
      
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="font-medium mb-4">AI课件生成</h3>
          <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium mb-3">
            从教案生成
          </button>
          <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium mb-3">
            从数据生成
          </button>
          <button className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium">
            输入课题
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">课件历史</h3>
          <div className="text-gray-500 text-sm">暂无课件记录</div>
        </div>
      </div>
    </div>
  );
};

export default PresentPage;