import Toggle from "@mui/icons-material/ArrowCircleRightOutlined";

const Toggler = () => {
  return (
    <div
      id="rotate"
      className="absolute sm:translate-x-[60px]  sm:-translate-y-8 z-50 lg:hidden"
      onClick={() => {
        const slidebar = document.getElementById("slidebar").classList;
        const rotate = document.getElementById("rotate").classList;
        rotate.contains("rotate-180")
          ? rotate.remove("rotate-180")
          : rotate.add("rotate-180");

        slidebar.contains("hidden")
          ? slidebar.remove("hidden")
          : slidebar.add("hidden");
      }}
    >
      <Toggle />
    </div>
  );
};

export default Toggler;
