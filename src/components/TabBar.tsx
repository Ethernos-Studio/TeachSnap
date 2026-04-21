'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TabItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

const tabs: TabItem[] = [
  { id: 'snap', label: '教随拍', icon: '📷', path: '/' },
  { id: 'prepare', label: '教随备', icon: '📝', path: '/prepare' },
  { id: 'test', label: '教随测', icon: '📋', path: '/test' },
  { id: 'present', label: '教随演', icon: '🎬', path: '/present' },
  { id: 'classroom', label: '教随堂', icon: '🏫', path: '/classroom' },
  { id: 'analyze', label: '教随看', icon: '📊', path: '/analyze' },
  { id: 'notify', label: '教随联', icon: '📢', path: '/notify' }
];

const TabBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="tab-bar">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.path}
            className={`flex flex-col items-center justify-center p-2 ${pathname === tab.path ? 'text-primary font-medium' : 'text-gray-500'}`}
          >
            <span className="text-2xl mb-1">{tab.icon}</span>
            <span className="text-xs">{tab.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default TabBar;