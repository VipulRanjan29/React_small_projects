import { useState } from "react";

function App() {
  const [color, setColor] = useState("#212121");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{
          backgroundColor: color,
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-3 rounded-3xl"
            style={{
              boxShadow: `0 0 0 3px rgba(0, 0, 0, 0.3) inset`,
              borderRadius: "20px",
              backgroundColor: "#D8B9C3",
            }}
          >
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg h-7 w-12"
              style={{
                boxShadow: `0 0 0 3px rgba(0, 0, 0, 0.3) inset`,
                borderRadius: "20px",
                backgroundColor: "#23103A",
              }}
              onClick={() => setColor("#23103A")}
            ></button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg h-7 w-12"
              style={{
                boxShadow: `0 0 0 3px rgba(0, 0, 0, 0.3) inset`,
                borderRadius: "20px",
                backgroundColor: "#40356F",
              }}
              onClick={() => setColor("#40356F")}
            ></button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg h-7 w-12"
              style={{
                boxShadow: `0 0 0 3px rgba(0, 0, 0, 0.3) inset`,
                borderRadius: "20px",
                backgroundColor: "#1C226B",
              }}
              onClick={() => setColor("#1C226B")}
            ></button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg h-7 w-12"
              style={{
                boxShadow: `0 0 0 3px rgba(0, 0, 0, 0.3) inset`,
                borderRadius: "20px",
                backgroundColor: "#153448",
              }}
              onClick={() => setColor("#153448")}
            ></button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg h-7 w-12 "
              style={{
                boxShadow: `0 0 0 3px rgba(0, 0, 0, 0.3) inset`,
                borderRadius: "20px",
                backgroundColor: "#3E31AE",
              }}
              onClick={() => setColor("#3E31AE")}
            ></button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg h-7 w-12 "
              style={{
                boxShadow: `0 0 0 3px rgba(0, 0, 0, 0.3) inset`,
                borderRadius: "20px",
                backgroundColor: "#4AA9AF",
              }}
              onClick={() => setColor("#4AA9AF")}
            ></button>
            <button
              className=" outline-none px-4 py-1 rounded-full shadow-lg h-7 w-12"
              style={{
                boxShadow: `0 0 0 3px rgba(0, 0, 0, 0.3) inset`,
                borderRadius: "20px",
                backgroundColor: "#B9EBCC",
              }}
              onClick={() => setColor("#B9EBCC")}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
