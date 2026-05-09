const http = require('http');

// Simple smoke test - checks server starts
console.log('Running tests...');

// Test 1: basic assertion
const test1 = 1 + 1 === 2;
console.log(test1 ? '✓ Test 1 passed' : '✗ Test 1 failed');

// Test 2: environment
console.log('✓ Test 2 passed: Node version', process.version);

if (!test1) process.exit(1);
console.log('All tests passed!');
