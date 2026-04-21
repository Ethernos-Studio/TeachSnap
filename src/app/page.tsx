import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">教随拍</h2>
        <p className="text-gray-600">拍照即批改，自动完成批改、归档、分层补救</p>
      </div>
      
      <div className="w-full max-w-md">
        <button className="w-full bg-primary text-white py-4 px-6 rounded-lg text-lg font-medium flex items-center justify-center gap-2 mb-4">
          📷 拍照批改
        </button>
        <button className="w-full bg-gray-200 text-gray-700 py-4 px-6 rounded-lg text-lg font-medium flex items-center justify-center gap-2">
          📁 从相册选择
        </button>
      </div>
      
      <div className="mt-8 w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-medium mb-2">最近批改</h3>
          <div className="text-gray-500 text-sm">暂无批改记录</div>
        </div>
      </div>
    </div>
  );
};

export default Home;