import fs from 'fs';
import https from 'https';
import http from 'http';
import { dummyProducts } from './src/lib/data.ts'; // wait, node can't require ts directly. I'll read as string.

const content = fs.readFileSync('src/lib/data.ts', 'utf8');

const products = [];
let currentProduct = null;
let lines = content.split('\n');
console.log('Testing BDSM images');
