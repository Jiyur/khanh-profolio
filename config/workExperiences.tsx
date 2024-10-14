import { WorkItemModel } from '@/types';
import ISBLogo from '@/assets/images/ISB-logo.png';
import HTDeptLogo from '@/assets/images/HRDept-logo.png';

export const workExperiences: WorkItemModel[] = [
  {
    logo: HTDeptLogo,
    title: 'HRDept Startup',
    time: 'April 2024 - Current',
    role: 'Front-end developer',
    href: 'https://stg.hrdept.vn/employer',
    desc: 'Working as Front-end Engineer role. Design and implement job searching project that help everyone can get their new job easily',
  },
  {
    logo: ISBLogo,
    title: 'ISB Việt Nam',
    href: 'https://isb-vietnam.com.vn/',
    time: 'Dec 2022 - April 2024',
    role: 'Front-end developer',
    desc: 'Working as Junior Software Engineer role. My main responsibily is design friendly user interface for banking project and solving bugs, issues',
  },
];
