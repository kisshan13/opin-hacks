function BannerContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className=" my-5 rounded-xl px-5 py-3 bg-dark-v-1 dark:bg-primary text-light-v-1  ">
      {children}
    </div>
  );
}

export default BannerContainer;
