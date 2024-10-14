import IntroductionSection from './_components/HomePage/IntroductionSection';
import MySkillSection from './_components/HomePage/MySkillSection';
import WorkExperienceSection from './_components/HomePage/WorkExperienceSection';

export default function Home() {
  return (
    <div className='space-y-40'>
      <IntroductionSection />
      <WorkExperienceSection />
      <MySkillSection />
    </div>
  );
}
