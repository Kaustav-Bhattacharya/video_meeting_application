import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover"/>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
