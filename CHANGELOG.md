# [1.2.0](https://github.com/ehsangazar/design-system/compare/v1.1.0...v1.2.0) (2024-12-01)


### Features

* add TypeScript declaration file path to package.json ([2fcc070](https://github.com/ehsangazar/design-system/commit/2fcc070eb0b399d5ab678f97836996a062898499))

# [1.1.0](https://github.com/ehsangazar/design-system/compare/v1.0.3...v1.1.0) (2024-12-01)


### Bug Fixes

* correct output directory key in Vite config and add vite-plugin-dts dependency ([966cc4e](https://github.com/ehsangazar/design-system/commit/966cc4e74ab2746967f72a3606f47ea2bd20a474))


### Features

* add peer dependencies for React and update TypeScript configuration ([97a265c](https://github.com/ehsangazar/design-system/commit/97a265cfc926d063ca718c2acc8b72cb9f118dad))

## [1.0.3](https://github.com/ehsangazar/design-system/compare/v1.0.2...v1.0.3) (2024-12-01)


### Bug Fixes

* update npm registry configuration to use npmjs.org and remove deprecated .npmrc-bc file ([8c85866](https://github.com/ehsangazar/design-system/commit/8c85866fee7d5defa623ae2c304ebef161d125ee))

## [1.0.2](https://github.com/ehsangazar/design-system/compare/v1.0.1...v1.0.2) (2024-12-01)


### Bug Fixes

* add GitHub package registry configuration to npmrc ([0021083](https://github.com/ehsangazar/design-system/commit/00210836734679d0f788d5367cdc549569806f67))

## [1.0.1](https://github.com/ehsangazar/design-system/compare/v1.0.0...v1.0.1) (2024-12-01)


### Bug Fixes

* add NPM_TOKEN to publish workflow environment variables ([0a4a2f8](https://github.com/ehsangazar/design-system/commit/0a4a2f8f6ec17f2f61057d42228404b5b72db84b))
* remove redundant npm config list commands in workflow ([00ca9a0](https://github.com/ehsangazar/design-system/commit/00ca9a00e5e981ccafc3a68e8047223ebef501b1))

# 1.0.0 (2024-12-01)


### Bug Fixes

* rename debug step to verify npm token and update token handling in workflow ([fc6d126](https://github.com/ehsangazar/design-system/commit/fc6d12669b679ca13e71b5376a20fa0533f313be))
* rename npm token verification step to debug and add token length output ([21d7d90](https://github.com/ehsangazar/design-system/commit/21d7d9071fbf1be8a02a826ee240d43160c9103a))
* simplify npm token verification step in GitHub Actions workflow ([2656937](https://github.com/ehsangazar/design-system/commit/26569371bb2e52208988e467db20ae02871a3459))
* update debug info step in GitHub Actions workflow to use multi-line echo ([c7b7336](https://github.com/ehsangazar/design-system/commit/c7b733660effa31d53ef831a166dcaa80b325df7))
* update environment variable name from GH_TOKEN to GITHUB_TOKEN in semantic-release step ([c5a59ba](https://github.com/ehsangazar/design-system/commit/c5a59bac90b731b9f7fd15c95af3e467034cd682))
* update GitHub Actions workflow to use correct GITHUB_TOKEN environment variable ([af9e328](https://github.com/ehsangazar/design-system/commit/af9e328a09590845a427c2898874b7022db83d3f))
* update npm token verification step to use userconfig and set environment variable ([0f7242c](https://github.com/ehsangazar/design-system/commit/0f7242c7a924aef0ab61e10e58effe54628cfa11))
* update npm whoami command to use verbose log level in GitHub Actions workflow ([53d3f31](https://github.com/ehsangazar/design-system/commit/53d3f317cf8b9a9e9c54f166684314484daa9a1a))
* update semantic-release step to use correct action and environment variable ([be594ed](https://github.com/ehsangazar/design-system/commit/be594edf8ed9450e9ebd67d06167d184b979cf5f))


### Features

* add Accordion component and stories; implement basic structure and styles ([0d775ef](https://github.com/ehsangazar/design-system/commit/0d775ef33d3b9359ac2b464002a3be393c717e56))
* add color2k library and implement dynamic color generation in Wrapper component ([4e3d0db](https://github.com/ehsangazar/design-system/commit/4e3d0dbd01fda1033151b379b8728480006f30a1))
* add ContextMenu component and stories; include CSS reset styles ([b9655bf](https://github.com/ehsangazar/design-system/commit/b9655bfc20c461e2d1d0df6f2f6f0d70d51472bd))
* add DataList component and stories; implement basic structure and controls ([67d5a3d](https://github.com/ehsangazar/design-system/commit/67d5a3d316655e50920774b96dd51f7f69c20570))
* add debug info step to GitHub Actions workflow for environment variables ([5eeac4a](https://github.com/ehsangazar/design-system/commit/5eeac4aba341ac73194497217eb35e79c9972001))
* add Dialog component and stories; implement basic structure and controls ([e664f95](https://github.com/ehsangazar/design-system/commit/e664f95e9c284a23fdf74f143480eee4d2eae61a))
* add GitHub Actions workflow for npm publishing and update package.json for package name and version ([2d1e93b](https://github.com/ehsangazar/design-system/commit/2d1e93bc94b30ff92150bd7a8e846a20b3a9191d))
* add Grid component stories with various configurations and controls ([d8db7a4](https://github.com/ehsangazar/design-system/commit/d8db7a48d213b686635d9a8a6c205fcb48037bd2))
* add HoverCard component and stories; implement basic structure and controls ([69d7ff3](https://github.com/ehsangazar/design-system/commit/69d7ff3cc5c8fe7f6d442b8e13747434b45b571a))
* add IconButton component and stories; implement basic structure and controls ([b68816e](https://github.com/ehsangazar/design-system/commit/b68816ec2b76e2f78a11f67335a21a6c78103757))
* add Inset component and stories; implement basic structure and controls ([4bb1cc7](https://github.com/ehsangazar/design-system/commit/4bb1cc71de00f169c341d86d8e3b7358d4847048))
* add Popover component and stories; implement basic structure and controls ([df18e1e](https://github.com/ehsangazar/design-system/commit/df18e1ed09480d719bf430d102c08e6863f8a8f3))
* add Progress component and stories; implement basic structure and controls ([24cf210](https://github.com/ehsangazar/design-system/commit/24cf2103247be77fc75e1622afd6e5cdd48d22bf))
* add Radio component and stories; implement basic structure and controls ([8ea7071](https://github.com/ehsangazar/design-system/commit/8ea70710de370d14551d99ddb2c4d0ac4f37dc6a))
* add RadioCards component and stories; implement basic structure and styles ([58b97b2](https://github.com/ehsangazar/design-system/commit/58b97b29ca5092b690c83de02a2dc08f4226fc2b))
* add RadioGroup component and stories; implement basic structure and controls ([226c6fc](https://github.com/ehsangazar/design-system/commit/226c6fcac7b0bbf49e3e6a17c201a95a52c2cad9))
* add repository URL to semantic-release configuration ([b0d1c08](https://github.com/ehsangazar/design-system/commit/b0d1c0812a997ac0ddac18add2949ff6ce4cb40f))
* add ScrollArea component and stories; implement basic structure and controls ([74126ec](https://github.com/ehsangazar/design-system/commit/74126ec5e089af358facca3e464f7b0381b230ae))
* add SegmentedControl component and stories; implement basic structure and controls ([45400bc](https://github.com/ehsangazar/design-system/commit/45400bcd40c543d58793894c5221da7279dbdd23))
* add Select component and stories; implement basic structure and controls ([06e666a](https://github.com/ehsangazar/design-system/commit/06e666ade0f031fae45d10d7dd6ebb38be908204))
* add semantic-release configuration and update GitHub Actions workflow for automated releases ([7817a1a](https://github.com/ehsangazar/design-system/commit/7817a1add2918d86116d2bd54266bfebfdb3abd8))
* add Separator component and stories; implement basic structure and controls ([d9a3933](https://github.com/ehsangazar/design-system/commit/d9a39330fbdb5865aa9548a9a83d5ca3c1e4da83))
* add Skeleton component and stories; implement basic structure and controls ([a6f8b1e](https://github.com/ehsangazar/design-system/commit/a6f8b1edd7a9a4b82611249e3312051af93b5ee4))
* add Slider component and stories; implement basic structure and controls ([b58d74c](https://github.com/ehsangazar/design-system/commit/b58d74cc1c66ad4b654658726993ed4822d4efb0))
* add Spinner component and stories; implement basic structure and loading states ([b7e3b53](https://github.com/ehsangazar/design-system/commit/b7e3b53a9432bb9795313c6e3b7edb61b31bb468))
* add Switch component and stories; implement basic structure and controls ([223f6e0](https://github.com/ehsangazar/design-system/commit/223f6e0ed9f6a29d983d1ebbfc9e3928cb3fa353))
* add Table component and stories; implement basic structure and controls ([2f20623](https://github.com/ehsangazar/design-system/commit/2f2062389b47b07e938c3ed48f4ee5f9c812251d))
* add TabNav component and stories; implement basic structure and controls ([834b77c](https://github.com/ehsangazar/design-system/commit/834b77c1ee85fc68cf9bfefbf4508be23ef374f8))
* add Tabs component and stories; implement basic structure and controls ([d10bed9](https://github.com/ehsangazar/design-system/commit/d10bed9dd4151ae9ffca100bc19c4806c1077191))
* add TextArea component and stories; implement basic structure and controls ([af93180](https://github.com/ehsangazar/design-system/commit/af931804e5d22bd22b2c7aaa35886016607e675b))
* add TextField component and stories; implement basic structure and controls ([73763fb](https://github.com/ehsangazar/design-system/commit/73763fb9c58fb7f15c34dac336372c3862dbba83))
* add Tooltip component and stories; implement basic structure and controls ([a32dd5c](https://github.com/ehsangazar/design-system/commit/a32dd5c30ec6a7ca08b46a7d6208fedf66a36116))
* add Vite configuration for publishing and update package.json for build scripts ([c8022c4](https://github.com/ehsangazar/design-system/commit/c8022c4b4034d9e35e2e4ae8c0fd9e391e95d637))
* add Wrapper component; update App and Storybook preview to use Wrapper; rename Radix to Gaz in documentation ([0d81a3b](https://github.com/ehsangazar/design-system/commit/0d81a3bb0087e409dc0fdd29f6076d57d0dd0fb6))
* comment out test step in GitHub Actions workflow for publishing ([0c2a23f](https://github.com/ehsangazar/design-system/commit/0c2a23f5f966429a34a11f743e12a7fcca7cdd52))
* enhance Theme interface with new properties for appearance, scaling, and event handlers ([872bbf0](https://github.com/ehsangazar/design-system/commit/872bbf0657d1fef0c16c73cda937f716b5a5a4a6))
* integrate Tailwind CSS for styling; add DropdownMenu component and stories ([1812e0b](https://github.com/ehsangazar/design-system/commit/1812e0ba460dce2139921570dbf0a24fe3d658bf))
* migrate from Wrapper to ThemeWrapper component and implement CSS reset and theme styles ([458f009](https://github.com/ehsangazar/design-system/commit/458f0092685a987daccefb5878ba26b0726c51e3))
* refactor theming by removing Theme component; integrate theming directly into Wrapper component ([3cdc74c](https://github.com/ehsangazar/design-system/commit/3cdc74c199a44054478bdf767d69ad7813fd91d4))
* remove Box component and documentation; add Container component with stories for layout flexibility ([901631f](https://github.com/ehsangazar/design-system/commit/901631fefec69ff4878c22dda0583a8eb2baa585))
* remove Container documentation; add Flex component stories with various configurations ([65c8d36](https://github.com/ehsangazar/design-system/commit/65c8d362083b09490a1fd5167383e7923e63e990))
* remove outdated theme documentation files for Cursor, Layout, Radius, Shadows, and Spacing ([074e915](https://github.com/ehsangazar/design-system/commit/074e915666ab6a9d28605c15478604a4a3d0f133))
* update Box component stories to support additional props; refactor render methods for better flexibility ([b62b6c2](https://github.com/ehsangazar/design-system/commit/b62b6c2870045d5831ca092abf2476b0ac43cdcb))
* update dependencies and install command in GitHub Actions workflow ([a72aee3](https://github.com/ehsangazar/design-system/commit/a72aee30cda52b64802f093b320694f3b8eab7f3))
* update GitHub Actions workflow for package build and publish steps ([2d9c5b3](https://github.com/ehsangazar/design-system/commit/2d9c5b3f77a3b4019f0f0ea611a473e80ff5b04b))
* update GitHub Actions workflow to change package-name to branch in publish step ([3df6e2d](https://github.com/ehsangazar/design-system/commit/3df6e2dcb2d1c4cd58943dbde770304e16291ee0))
* update GitHub Actions workflow to trigger on master branch ([08507ce](https://github.com/ehsangazar/design-system/commit/08507ce7f2c6d090d018bab08dff38aa8462e317))
* update GitHub Actions workflow to verify npm token and configure publish registry ([6d89ef9](https://github.com/ehsangazar/design-system/commit/6d89ef9920c6c753997d2ace602b7c70a46b0f40))
* update IconButton stories to use MagnifyingGlassIcon for children ([6908a34](https://github.com/ehsangazar/design-system/commit/6908a345da792759d83aa1f0f119cc87fe3f1b0f))
* update Node.js version to 20 and rename package to @ehsangazar/design-system with version 0.0.2 ([54bace9](https://github.com/ehsangazar/design-system/commit/54bace90645b6d3c0241db235419d03645aef1f2))
* update package-lock.json to set dev dependencies and remove overrides in package.json ([fac99d2](https://github.com/ehsangazar/design-system/commit/fac99d2d969c2c11a8984951a53d73cdce1e6695))
* update test command in GitHub Actions workflow to run storybook tests ([af2ec3f](https://github.com/ehsangazar/design-system/commit/af2ec3fc1a6a782af8da4e699efc81b6f91b7a9b))
