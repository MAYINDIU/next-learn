"use client";
export default function Button() {
  return (
    <button
      onClick={() => console.log("Hello World")}
      className="bg-green-500 rounded-md p-2 text-white"
    >
      Click Here
    </button>
  );
}
