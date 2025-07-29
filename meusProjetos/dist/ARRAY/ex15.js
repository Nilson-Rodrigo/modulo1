"use strict";
/*Armazene 8 números e mostre-os ordenados em ordem crescente.*/
let n = [1, 0, 99, -6, 88, 100, -3, 5];
for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
        if (n[j] > n[j + 1]) {
            let m = n[j];
            n[j] = n[j + 1];
            n[j + 1] = m;
        }
        else {
            if (n[j + 1] > n[j]) {
                let m = n[j + 1];
                n[j + 1] = n[j];
                n[j + 1] = m;
            }
        }
    }
}
console.log(n);
