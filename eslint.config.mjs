import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // any 사용 → 경고로만 처리
      "@typescript-eslint/no-explicit-any": "warn",

      // 사용하지 않는 변수 경고, 단 언더스코어(_)로 시작하면 무시
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],

      // 필요시 추가적인 룰 조정 가능
      "no-console": "off", // 콘솔 사용 허용

      // JSX 안에서 escape 없이 특수문자 허용
      "react/no-unescaped-entities": "off",
    },
  },
];


export default eslintConfig;
