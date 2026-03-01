const BackgroundEffects = () => {
  return (
    <>
      {/* Gradient orbs */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-blue-500 rounded-full blur-[120px] opacity-[0.15]" />
        <div className="absolute -bottom-52 -right-40 w-150 h-150 bg-blue-600 rounded-full blur-[120px] opacity-[0.12]" />
        <div className="absolute top-[40%] left-[50%] w-100 h-100 bg-blue-600 rounded-full blur-[120px] opacity-[0.08]" />
      </div>

      {/* Radial overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(96,165,250,0.12),transparent_45%)]" />

      {/* Grid pattern */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-grid-pattern opacity-50" />
    </>
  );
};

export default BackgroundEffects;