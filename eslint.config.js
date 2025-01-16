import eslintJs from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import tseslint from "typescript-eslint";
import eslintImport from "eslint-plugin-import";

export default tseslint.config({
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
        eslintJs.configs.recommended,
        tseslint.configs.recommended,
        eslintReact.configs.recommended,
    ],
    plugins: {
        import: eslintImport,
    },
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            projectService: true,
        },
    },
});
