extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    return a + b;
}

#[wasm_bindgen]
pub fn fib(n: i32) -> i32 {
    if n == 0 || n == 1 {
        return n;
    }

    fib(n - 1) + fib(n - 2)
}
