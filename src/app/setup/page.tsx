'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import storage from '@/utils/db';

const SetupPage: React.FC = () => {
  const router = useRouter();
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey.trim()) {
      setError('请输入API Key');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // 保存API Key到本地存储
      await storage.saveSetting('moonshot_key', apiKey);
      // 保存班级名称和教师姓名作为默认值
      await storage.saveSetting('class_name', '三年级一班');
      await storage.saveSetting('teacher_name', '张老师');
      
      // 跳转到首页
      router.push('/');
    } catch (err) {
      setError('保存失败，请重试');
      console.error('保存API Key失败:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">TeachSnap 教随拍</h1>
          <p className="text-gray-600">乡村教师的离线 AI 工作台</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">设置 API Key</h2>
          <p className="text-gray-500 text-sm mb-4">
            请输入您的 Moonshot API Key，以便使用 AI 批改和课件生成功能。
          </p>
          <p className="text-gray-500 text-sm mb-4">
            如何获取 API Key？
            <br />
            1. 访问 moonshot.cn
            <br />
            2. 注册并登录
            <br />
            3. 在个人中心获取 API Key
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
              Moonshot API Key
            </label>
            <input
              type="text"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxx"
            />
          </div>

          {error && (
            <div className="text-danger text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            {loading ? '保存中...' : '保存并继续'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>API Key 将安全存储在本地，不会上传到任何服务器</p>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;