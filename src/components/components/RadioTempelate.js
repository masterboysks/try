import Break from "./Break";

function RadioTempelate({
  value,
  templateName,
  templateLabel,
  title,
  textBtn,
  selected,
  setSelected,
  dataTitle,
  dataValue,
}) {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  const handleChange = (e) => {
    const target = e.target;

    if (target.checked) {
      setSelected(target.value);
    }
  };
  return (
    <>
      <div className="mb-3">
        <Break title={title}></Break>
      </div>
      {templateLabel || "Select a tempelate : "}
      <form className=" md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid grid-cols-2 gap-4 my-6 rounded-md">
        {value.map((value) => (
          <div className=" relative" key={value}>
            <label
              htmlFor={value}
              className="w-fit z-[1] relative flex mx-auto"
            >
              <img
                src={value}
                alt={templateName}
                className="h-44 w-fit  object-cover"
              />
              <input
                id={value}
                type="radio"
                name={templateName}
                value={value}
                checked={selected === value}
                onChange={handleChange}
                {...optional}
                className=" -right-2 -top-2 absolute"
              />
            </label>
            <div className=" absolute top-0 grid w-full h-full">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={value}
                className=" justify-self-center z-20 p-2 my-auto bg-white rounded-lg"
              >
                {textBtn || "View"}
              </a>
            </div>
          </div>
        ))}
      </form>
    </>
  );
}

export default RadioTempelate;
