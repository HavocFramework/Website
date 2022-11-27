import { MD5 } from 'crypto-js';

export default function calculateHash(text) {
    return MD5(text).toString().slice(0, 10);
}