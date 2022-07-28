function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ tabs }) {
  return (
    <div className="my-6">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="focus:ring-i focus:border- border-primary-grey-200 block w-full rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="sm:block hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-primary-grey-600 text-primary-grey-600  font-medium"
                    : "border-transparent text-primary-grey-500  hover:border-primary-grey-300",
                  "w-1/3 py-4 px-1 text-center border-b-2  text-sm"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
