import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default [
    js.configs.recommended,
    stylistic.configs.recommended,
    {
        "@stylistic/semi": ["error", "always"],
        "@stylistic/no-extra-semi": "error",
        "@stylistic/quotes": ["error", "double"],
        "@stylistic/brace-style": ["error", "1tbs"],
    }
];
