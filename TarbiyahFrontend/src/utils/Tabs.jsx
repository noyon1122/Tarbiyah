import React, { useState, createContext, useContext, Children, cloneElement } from "react";
import '../utils/Tabs.css';
// Context to share active tab index and setter
const TabsContext = createContext();

export function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // We pass activeIndex and setter down via context
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="custom-tabs">{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ children }) {
  // Expect children to be <Tab>
  return <div className="tab-list" role="tablist">{children}</div>;
}

export function TabPanel({ children, index }) {
  const { activeIndex } = useContext(TabsContext);
  return (
    <div
      role="tabpanel"
      hidden={activeIndex !== index}
      className="tab-panel"
    >
      {activeIndex === index ? children : null}
    </div>
  );
}

export function Tab({ children, index }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;

  const handleClick = () => {
    setActiveIndex(index);
  };

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={handleClick}
      className={`tab ${isActive ? "active" : ""}`}
      type="button">
        
      {children}
    </button>
  );
}

