//Default Export
//Name Export
//Mixed Export(Default + Named)
//Export everything

//!Default Export

// export default function (name) {
//   return `Hello ${name}`;
// }

//!Name Export

// export function add(a, b) {
//   return a + b;
// }
// export function subtract(a, b) {
//   return a - b;
// }

//!Mixed Export(Default + Named)

// export default function (name) {
//   return `Hello ${name}`;
// }

// export function subtract(a, b) {
//   return a - b;
// }

// export function add(a, b) {
//   return a + b;
// }

//! Export everything

export function subtract(a, b) {
  return a - b;
}

export function add(a, b) {
  return a + b;
}
