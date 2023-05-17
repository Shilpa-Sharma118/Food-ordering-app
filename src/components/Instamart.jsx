import React, { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible, setHide }) => {
  // const [isVisible, setIsVisible] = useState(false);
  console.log("isVisible", isVisible);

  return (
    <div className="border border-zinc-900 p-2 m-2">
      <h1 className="font-bold text-xl p-2 m-2">{title}</h1>
      <button
        className="bg-slate-300 border border-zinc-900 rounded-sm p-2 m-2 cursor-pointer"
        onClick={() => {
          if (isVisible) setHide();
          else setIsVisible();
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && (
        <h2 p-2 m-2>
          {desc}
        </h2>
      )}
    </div>
  );
};

const Instamart = () => {
  // const [sectionConfig, setSectionConfig] = useState({
  //   showAbout: true,
  //   showTeam: false,
  //   showCareers: false,
  // });

  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "About"}
        setIsVisible={() => setVisibleSection("About")}
        setHide={() => setVisibleSection("")}
      />
      <Section
        title={"About Careers"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        setIsVisible={() => setVisibleSection("Careers")}
        isVisible={visibleSection === "Careers"}
        setHide={() => setVisibleSection("")}
      />
      <Section
        title={"About Team"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        setIsVisible={() => setVisibleSection("Teams")}
        isVisible={visibleSection === "Teams"}
        setHide={() => setVisibleSection("")}
      />
    </div>
  );
};

export default Instamart;
