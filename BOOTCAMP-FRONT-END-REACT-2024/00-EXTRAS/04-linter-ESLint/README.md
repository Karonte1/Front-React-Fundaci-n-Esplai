# Forma manual y rápida de usar el Linter con Standard

1. Instala el paquete STANDARD (normalmente como dependencia de desarrollo)
   1. `npm i -D standard`
2. Dentro del `package.json` añade la propiedad `esLintConfig`

   ```json
   {
    "esLintConfig": {
      "extends": "standard"
    }
   }
   ```

3. Si inmediatamente no ves resultados, reinicia la ventana.
