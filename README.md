# `oasis components` github guide

---

Use `docs` for dev-driven(?) testing and making documentation.
Use `oasis` for components:
Naming scheme

Component or ComponentName:
- Add folder in `src/components/[category]/[component name]`
- Categories include
    - block – big, significant components
    - core – base building blocks
    - form – ... yea

`[ComponentName].styles` for component style, use `StyleSheet` type, see `src/context/OasisProvider.txs` (also for color).

`[ComponentName].props` for component typescript react properties.

`[ParentFolderForComponent]/components/[SubComponent]` for subcomponents.

Export each of the components using the `export * from './path/to/file'`

See `package.json` for command information. That's all for now...
