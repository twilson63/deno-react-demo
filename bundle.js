export default function (bundle) {
  return Deno.emit(
    bundle,
    {
      bundle: "module",
      compilerOptions: {
        lib: ["dom", "dom.iterable", "esnext"],
      },
      importMap: {
        "imports": {
          "react": "https://esm.sh/react@alpha?dev",
          "react-dom": "https://esm.sh/react-dom@alpha?dev",
          "react-dom/server": "https://esm.sh/react-dom@alpha/server?dev"
        }
      },
      importMapPath: 'file:///import-map.json'
    }
  )
}