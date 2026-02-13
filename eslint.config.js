// eslint.config.js
import eslintReact from "@eslint-react/eslint-plugin";
import eslintJs from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      eslintJs.configs.recommended,
      eslintReact.configs["recommended-typescript"],
    ],
     rules: {
        'no-console': 'warn',        // 不允许 console.log（警告级别）
        'eqeqeq': 'error',           // 必须使用 === 而不是 ==
        'react/prop-types': 'off',   // 关闭 prop-types 检查（TypeScript 项目中）
        '@typescript-eslint/no-explicit-any': 'warn' // 警告使用 any 类型
    },
  },
])
