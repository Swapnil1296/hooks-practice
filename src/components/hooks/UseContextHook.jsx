import React, { createContext, useContext, useState } from "react";

//  create context
const ThemeContext = createContext();

// create a provider
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevThem) => (prevThem === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// rendering component/consumer component
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>{theme.toUpperCase()} MODE</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </>
  );
};

// main component to wrap the theme
const UseContextHook = () => {
  return (
    <ThemeContextProvider>
      <ThemeSwitcher />
    </ThemeContextProvider>
  );
};

export default UseContextHook;

// ####example with typescript

// import React, { createContext, useContext, useState, ReactNode } from "react";

// // 1️⃣ Define the type for the context value
// interface ThemeContextType {
//   theme: string;
//   toggleTheme: () => void;
// }

// // 2️⃣ Create the context with a default value (undefined)
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// // 3️⃣ Define props type for the provider component
// interface ThemeProviderProps {
//   children: ReactNode;
// }

// // 4️⃣ ThemeContextProvider component
// const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   const [theme, setTheme] = useState<string>("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // 5️⃣ Consumer Component
// const ThemeSwitcher: React.FC = () => {
//   const context = useContext(ThemeContext);

//   if (!context) {
//     throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
//   }

//   const { theme, toggleTheme } = context;

//   return (
//     <div
//       style={{
//         background: theme === "light" ? "#fff" : "#333",
//         color: theme === "light" ? "#000" : "#fff",
//         padding: "20px",
//         textAlign: "center",
//       }}
//     >
//       <h1>{theme.toUpperCase()} MODE</h1>
//       <button onClick={toggleTheme}>
//         Switch to {theme === "light" ? "Dark" : "Light"} Mode
//       </button>
//     </div>
//   );
// };

// // 6️⃣ Main Component
// const UseContextHook: React.FC = () => {
//   return (
//     <ThemeContextProvider>
//       <ThemeSwitcher />
//     </ThemeContextProvider>
//   );
// };

// export default UseContextHook;
