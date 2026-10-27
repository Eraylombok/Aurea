import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync('index.html', 'utf8');
const required = ['<title>Auréa Studio</title>', 'Studio', 'Académie', 'Templates', 'crédit'];
for (const token of required) {
  assert.ok(html.includes(token), `Missing expected UI element: ${token}`);
}
assert.ok(html.length > 1000, 'Prototype HTML is unexpectedly empty');
console.log('Auréa prototype smoke checks passed.');
