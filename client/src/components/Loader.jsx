function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full py-16">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-zinc-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}

export default Loader;