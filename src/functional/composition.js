/* Composing and Piping */
console.log("---Composing and Piping---");

import { compose, pipe } from "lodash/fp";

let input = "   JavaScript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrapInSpan = (str) => `<span>${str}</span>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

// const transform = wrapInDiv(toLowerCase(trim(input)));
// const transform = wrap("div")(toLowerCase(trim(input)));
// const transform = compose(wrap("span"), toLowerCase, trim); // need to be on order right to left
const transform = pipe(trim, toLowerCase, wrap("span"));
console.log("Transform");
console.log(transform(input));