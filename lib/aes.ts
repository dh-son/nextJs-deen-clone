import CryptoJS from "crypto-js";

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY!;
const iv = process.env.NEXT_PUBLIC_IV!;

export function aesEncrypt(str: string) {
  const cipher = CryptoJS.AES.encrypt(str, CryptoJS.enc.Utf8.parse(secretKey), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });

  return cipher.toString();
}

export function aesDecrypt(str: string) {
  const decipher = CryptoJS.AES.decrypt(
    str,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    }
  );

  return decipher.toString(CryptoJS.enc.Utf8);
}
