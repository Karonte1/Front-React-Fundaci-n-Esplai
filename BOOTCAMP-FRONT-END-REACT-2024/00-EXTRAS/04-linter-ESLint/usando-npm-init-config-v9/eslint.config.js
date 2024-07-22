import globals from "globals";
import pluginJs from "@eslint/js";
import config from "eslint-config-standard";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended
];