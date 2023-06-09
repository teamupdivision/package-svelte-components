import { states } from "../../utils/states.js";
import { text } from "../../utils/text.js";

export const containerClass =
  "items-center rounded-full cursor-pointer flex p-3 relative overflow-hidden";

export const rootClass = "items-center inline-flex";

export const labelClass =
  "text-gray-700 cursor-pointer font-light mt-px select-none";

export function getInputClass(color) {
  const structureClass = {
    base: "appearance-none before:bg-blue-gray-500 before:rounded-full before:content[''] before:block before:h-12 before:left-2/4 before:opacity-0 hover:before:opacity-10 before:absolute before:top-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:transition-opacity before:w-12 border-blue-gray-200 rounded-full border cursor-pointer h-5 peer relative transition-all w-5",
    color: `${text[color]} ${states.checked.border[color]} ${states.checked.before.colors[color]}`,
  };

  return {
    style: `${structureClass.base} ${structureClass.color}`,
    color: structureClass.color,
  };
}

export const containerCircle =
  "absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity";
