import { get, set, del, clear, keys } from 'idb-keyval';

// 数据模型类型
export interface Student {
  id: string;
  name: string;
  groupId: string | null;
  createdAt: number;
}

export interface Homework {
  id: string;
  studentId: string;
  subject: 'math' | 'chinese' | 'english';
  date: number;
  imageBlob: Blob;
  ocrText: string;
  vlmResult: any;
  status: 'pending' | 'done' | 'review_needed';
}

export interface ErrorRecord {
  id: string;
  homeworkId: string;
  studentId: string;
  questionNum: number;
  errorType: string;
  suggestion: string;
  date: number;
}

export interface Behavior {
  id: string;
  studentId: string;
  type: 'reward' | 'penalty';
  points: number;
  reason: string;
  source: 'manual' | 'snapcorrect' | 'snapquiz';
  date: number;
}

export interface Group {
  id: string;
  name: string;
  memberIds: string[];
  totalPoints: number;
  weeklyWin: number;
}

export interface LotteryState {
  studentId: string;
  lastPicked: number;
  streak: number;
  recentPicks: number;
}

export interface Template {
  id: string;
  name: string;
  subject: string;
  content: string;
  updatedAt: number;
}

export interface Exam {
  id: string;
  title: string;
  questions: any[];
  generatedAt: number;
}

export interface ImageCache {
  keyword: string;
  base64: string;
  createdAt: number;
}

export interface Settings {
  key: 'moonshot_key' | 'class_name' | 'teacher_name' | 'bing_api_key';
  value: string;
  encrypted?: boolean;
}

// 存储键前缀
const PREFIX = 'teachsnap:';

// 通用存储方法
const storage = {
  // 学生相关
  async saveStudent(student: Student): Promise<void> {
    await set(`${PREFIX}student:${student.id}`, student);
  },
  
  async getStudent(id: string): Promise<Student | undefined> {
    return await get(`${PREFIX}student:${id}`);
  },
  
  async getAllStudents(): Promise<Student[]> {
    const allKeys = await keys();
    const studentKeys = allKeys.filter(key => key.startsWith(`${PREFIX}student:`));
    const students: Student[] = [];
    
    for (const key of studentKeys) {
      const student = await get(key);
      if (student) students.push(student);
    }
    
    return students;
  },
  
  // 作业相关
  async saveHomework(homework: Homework): Promise<void> {
    await set(`${PREFIX}homework:${homework.id}`, homework);
  },
  
  async getHomework(id: string): Promise<Homework | undefined> {
    return await get(`${PREFIX}homework:${id}`);
  },
  
  // 错误记录
  async saveErrorRecord(error: ErrorRecord): Promise<void> {
    await set(`${PREFIX}error:${error.id}`, error);
  },
  
  // 课堂行为
  async saveBehavior(behavior: Behavior): Promise<void> {
    await set(`${PREFIX}behavior:${behavior.id}`, behavior);
  },
  
  // 设置
  async saveSetting(key: Settings['key'], value: string, encrypted = false): Promise<void> {
    await set(`${PREFIX}setting:${key}`, { key, value, encrypted });
  },
  
  async getSetting(key: Settings['key']): Promise<Settings | undefined> {
    return await get(`${PREFIX}setting:${key}`);
  },
  
  // 图片缓存
  async saveImageCache(keyword: string, base64: string): Promise<void> {
    await set(`${PREFIX}image:${keyword}`, { keyword, base64, createdAt: Date.now() });
  },
  
  async getImageCache(keyword: string): Promise<ImageCache | undefined> {
    return await get(`${PREFIX}image:${keyword}`);
  },
  
  // 清理
  async clear(): Promise<void> {
    await clear();
  }
};

export default storage;