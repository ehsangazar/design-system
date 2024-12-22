# [1.52.0](https://github.com/ehsangazar/design-system/compare/v1.51.0...v1.52.0) (2024-12-22)


### Bug Fixes

* correct typo in Storybook start script from 'nohub' to 'nohup' ([178acd3](https://github.com/ehsangazar/design-system/commit/178acd3398411cf9231db8b786813781c4724e03))
* enable verbose output for Storybook tests in publish workflow ([43dbdda](https://github.com/ehsangazar/design-system/commit/43dbdda4db8715af3c594a99ef47a427bc8509f2))
* increase sleep duration for Storybook startup and update test command for CI ([670531f](https://github.com/ehsangazar/design-system/commit/670531f822aa2bf1d0e459495df79bba8af87988))
* reduce sleep duration for Storybook startup and add global test function for Jest ([a577d09](https://github.com/ehsangazar/design-system/commit/a577d09233127c5138c976a8fca3d7204b0bb64e))
* remove unnecessary Storybook kill step from GitHub Actions workflow ([8fc4639](https://github.com/ehsangazar/design-system/commit/8fc4639076607429b290dbac9d2ca6fd1cc96ecb))
* remove verbose flag from Storybook test command and update .gitignore for coverage ([7dc83df](https://github.com/ehsangazar/design-system/commit/7dc83df78474cd63d44c889fb3d36f8a0ca184dd))
* specify Input type for FormControl component prop ([b2d9efd](https://github.com/ehsangazar/design-system/commit/b2d9efd696b1e4ce7b536fba8f470d0a8a03c50d))
* update FormControl component prop to accept additional input attributes ([6c52fdf](https://github.com/ehsangazar/design-system/commit/6c52fdfd8b3f408ac5a3feea3687cd684fb751f9))
* update GitHub Actions workflow to remove Playwright installation and Storybook server startup ([f630ba8](https://github.com/ehsangazar/design-system/commit/f630ba81251b5c95758eccd46bf1a437f4e9f008))
* update storybook test command to include specific story files ([3a2d5ab](https://github.com/ehsangazar/design-system/commit/3a2d5ab4d36cb205006e1a2640d3d0ae5f0051d7))


### Features

* add Playwright browser installation step in publish workflow ([ae99261](https://github.com/ehsangazar/design-system/commit/ae99261e29a382aa263e8b464e1ff472dbc04ee3))
* enhance GitHub Actions workflow for Storybook with build, test, and server management ([47750d5](https://github.com/ehsangazar/design-system/commit/47750d572105e98ce50e27cda198662f4ee3fd0e))
* enhance InputDropdown stories with Box wrapper and update package scripts ([95aa109](https://github.com/ehsangazar/design-system/commit/95aa1094b705a78ad06cb30d0f0d70c5cb2927fc))
* enhance publish workflow with Playwright browser installation and Storybook management ([c6e065b](https://github.com/ehsangazar/design-system/commit/c6e065b602b2d245e1c9927860a0aa14060162ea))
* update pre-push hook to run Storybook package build ([901d316](https://github.com/ehsangazar/design-system/commit/901d3166d39279f852efb9c0b33d1190e22dfc25))
* update publish workflow to set Git user config and streamline Storybook build process ([bb92451](https://github.com/ehsangazar/design-system/commit/bb92451bbabf088f36c4c176af6dd3f09c673483))
* update publish workflow to start Storybook server in the background ([7af7e5c](https://github.com/ehsangazar/design-system/commit/7af7e5cde29b578f7e4f448c02152b22238e9d69))
* update Storybook configuration and deployment scripts; remove tsup config ([2498cb0](https://github.com/ehsangazar/design-system/commit/2498cb0c2ee21aa13e27b7f07b80510e812ef7a1))
* update Storybook start script to use 'dev' command ([1771151](https://github.com/ehsangazar/design-system/commit/17711511f1d7675862b09c830a329c769058a59f))
* update Storybook start script to use 'nohub' for background execution ([3ef7992](https://github.com/ehsangazar/design-system/commit/3ef7992f23f46d9abb97a94aec3032b2e01638aa))

# [1.51.0](https://github.com/ehsangazar/design-system/compare/v1.50.0...v1.51.0) (2024-12-08)


### Features

* add DropdownMenu component export to index ([5c81b1f](https://github.com/ehsangazar/design-system/commit/5c81b1fa2e242cfedaa048dff97a0668d7f93d8b))

# [1.50.0](https://github.com/ehsangazar/design-system/compare/v1.49.0...v1.50.0) (2024-12-08)


### Bug Fixes

* **MenuBar:** update component reference in stories to MenuBar.Root ([ff59aa0](https://github.com/ehsangazar/design-system/commit/ff59aa07eacc03bd8da0303d284608225bf96691))


### Features

* implement MenuBar component with styling and dropdown functionality ([b972ced](https://github.com/ehsangazar/design-system/commit/b972ced6bdb5439d0ccb03f5b7a2b988e83618eb))

# [1.49.0](https://github.com/ehsangazar/design-system/compare/v1.48.0...v1.49.0) (2024-12-08)


### Features

* add MenuBar and ClientOnly components, integrate react-toastify for notifications ([652a3b7](https://github.com/ehsangazar/design-system/commit/652a3b76a0bde2f35654027464804da4df58d81d))

# [1.48.0](https://github.com/ehsangazar/design-system/compare/v1.47.0...v1.48.0) (2024-12-08)


### Features

* add Colors field to Form with multi-select InputDropdown ([fe9fd70](https://github.com/ehsangazar/design-system/commit/fe9fd70b185cb6d9734058290098c391b0058091))

# [1.47.0](https://github.com/ehsangazar/design-system/compare/v1.46.0...v1.47.0) (2024-12-08)


### Features

* enhance InputDropdown styles and add theme support in Storybook ([e38ec65](https://github.com/ehsangazar/design-system/commit/e38ec658c8d431d4257398e916de0d7912f0d6b1))
* update Card component to use hoverEnabled prop directly ([4103157](https://github.com/ehsangazar/design-system/commit/41031577428040bed1da409191cc9eae33a5b636))

# [1.46.0](https://github.com/ehsangazar/design-system/compare/v1.45.0...v1.46.0) (2024-12-08)


### Features

* refactor InputDropdown component and update Form to use new options structure ([4bf27c9](https://github.com/ehsangazar/design-system/commit/4bf27c99b2c884873cbc9ad45a75fa5fe3810168))

# [1.45.0](https://github.com/ehsangazar/design-system/compare/v1.44.0...v1.45.0) (2024-12-08)


### Features

* add alert for article limit notification in form component ([59eb4d2](https://github.com/ehsangazar/design-system/commit/59eb4d260d3bb2ebd20840a948fe1e3c195083c2))
* add InputDropdown component and integrate into Form with validation ([f6df174](https://github.com/ehsangazar/design-system/commit/f6df174125fe9fe729f16f9850aea2d13323e99d))

# [1.44.0](https://github.com/ehsangazar/design-system/compare/v1.43.0...v1.44.0) (2024-12-07)


### Bug Fixes

* update pre-commit hook to run only linting ([1e1eb29](https://github.com/ehsangazar/design-system/commit/1e1eb29ef10fbd14ab2e501ceb796a47904e21b9))


### Features

* add pre-commit and pre-push hooks for linting and testing ([9e06ef8](https://github.com/ehsangazar/design-system/commit/9e06ef8a1706e4617334e12aa87f49920860ff27))

# [1.43.0](https://github.com/ehsangazar/design-system/compare/v1.42.0...v1.43.0) (2024-12-07)


### Features

* add Storyshots for visual regression testing and update package.json scripts ([8b66688](https://github.com/ehsangazar/design-system/commit/8b666885d8cfeb6663281b1238d9b404b73d11e4))

# [1.42.0](https://github.com/ehsangazar/design-system/compare/v1.41.0...v1.42.0) (2024-12-07)


### Features

* add husky for Git hooks and update package-lock.json ([dcb38a7](https://github.com/ehsangazar/design-system/commit/dcb38a70cc2bb3daab1ddba815d0e02aba6db1b2))

# [1.41.0](https://github.com/ehsangazar/design-system/compare/v1.40.0...v1.41.0) (2024-12-07)


### Features

* add FormControl component export to index ([f76bb79](https://github.com/ehsangazar/design-system/commit/f76bb79240bbab2925842783079f45c4210b02ae))

# [1.40.0](https://github.com/ehsangazar/design-system/compare/v1.39.0...v1.40.0) (2024-12-07)


### Features

* enhance InputTextArea component with forwardRef support ([a380db3](https://github.com/ehsangazar/design-system/commit/a380db3a126a7bba3adaf9ff7a8aa2fc9d9e98fc))

# [1.39.0](https://github.com/ehsangazar/design-system/compare/v1.38.0...v1.39.0) (2024-12-07)


### Features

* implement Form component with validation and FormControl for input handling ([936d73c](https://github.com/ehsangazar/design-system/commit/936d73cda2ef9d85af4f0c31f4137c0f801395a9))

# [1.38.0](https://github.com/ehsangazar/design-system/compare/v1.37.0...v1.38.0) (2024-12-07)


### Features

* rename Dialog and Callout components to Modal and Alert; remove Inset component ([4f0d099](https://github.com/ehsangazar/design-system/commit/4f0d09915c43343f236b4a37f028441b6e601f95))
* rename Dialog export to Modal in index.ts ([5eeb4e2](https://github.com/ehsangazar/design-system/commit/5eeb4e24d7783e744b7a479f1f654eb3285b1ea5))
* replace TextArea and TextField components with Input and InputTextArea; add DropdownMenu component ([356e13c](https://github.com/ehsangazar/design-system/commit/356e13ceaa068dbcbfcc173bb9001c975a7e812b))
* uncomment shade generation logic in generateShades function ([1312d6a](https://github.com/ehsangazar/design-system/commit/1312d6a078f46b24abf6cd5f9f14a194ac721d8b))

# [1.37.0](https://github.com/ehsangazar/design-system/compare/v1.36.0...v1.37.0) (2024-12-07)


### Features

* remove Select and DropdownMenu components; clean up unused dependencies ([7856b3a](https://github.com/ehsangazar/design-system/commit/7856b3a1fede887fe83fa57b27706bb59a755703))

# [1.36.0](https://github.com/ehsangazar/design-system/compare/v1.35.0...v1.36.0) (2024-12-07)


### Features

* refactor List styles; replace GazLink with Gaz-ul and Gaz-ol for improved list presentation ([5bacb8b](https://github.com/ehsangazar/design-system/commit/5bacb8bbd8afdd93ff4487a7d655c74559628772))

# [1.35.0](https://github.com/ehsangazar/design-system/compare/v1.34.0...v1.35.0) (2024-12-07)


### Features

* update BreadcrumbLink styles; remove underline and adjust color properties ([12949d0](https://github.com/ehsangazar/design-system/commit/12949d0727178e10d7f135aa58d91bebea13c4e2))

# [1.34.0](https://github.com/ehsangazar/design-system/compare/v1.33.0...v1.34.0) (2024-12-07)


### Features

* refactor Link component styles and functionality; remove unused styles and update hover effects ([badcba5](https://github.com/ehsangazar/design-system/commit/badcba58f7d0eaada5410b21ad0b6a450bdddcf4))
* remove unused Link import from CardsList component ([d2152da](https://github.com/ehsangazar/design-system/commit/d2152dad00f55d7ab64859aa6e57948dd2e2e058))

# [1.33.0](https://github.com/ehsangazar/design-system/compare/v1.32.0...v1.33.0) (2024-12-07)


### Features

* update GazLink component to support noStyle prop and enhance underline styles; replace Link.css with List.css ([3e1bdee](https://github.com/ehsangazar/design-system/commit/3e1bdee6f10bfb178213995193493c173a73ac19))

# [1.32.0](https://github.com/ehsangazar/design-system/compare/v1.31.0...v1.32.0) (2024-12-07)


### Features

* add List component with styled unordered and ordered lists ([0a38782](https://github.com/ehsangazar/design-system/commit/0a38782cacf4eac726d9529c0bc5bdcedf8d2ee3))

# [1.31.0](https://github.com/ehsangazar/design-system/compare/v1.30.0...v1.31.0) (2024-12-07)


### Features

* enhance GazLink styles with underline support and hover effects ([6ab2a19](https://github.com/ehsangazar/design-system/commit/6ab2a1985f4867ced6106118289f685cdfbf6f79))
* update GazCard styles and enhance GazLink component with conditional underline classes ([fcbc739](https://github.com/ehsangazar/design-system/commit/fcbc7399e58ef6809b96c34bca221df8bacb0ea5))

# [1.30.0](https://github.com/ehsangazar/design-system/compare/v1.29.0...v1.30.0) (2024-12-06)


### Features

* add GazLink component with customizable styles and hover effects; update GazCard hover styles ([b4a118a](https://github.com/ehsangazar/design-system/commit/b4a118aedee9c2fc442bc0f9112f5d0674b9809c))

# [1.29.0](https://github.com/ehsangazar/design-system/compare/v1.28.0...v1.29.0) (2024-12-06)


### Features

* add Breadcrumb component with stories for demonstration ([07ef159](https://github.com/ehsangazar/design-system/commit/07ef159c62d0050db3c1b6a77556efd901f986be))

# [1.28.0](https://github.com/ehsangazar/design-system/compare/v1.27.0...v1.28.0) (2024-12-06)


### Features

* update Accordion component to support dynamic background color and change default theme appearance to dark ([5d2ab9f](https://github.com/ehsangazar/design-system/commit/5d2ab9f111ece3c79e9527824414c50b5c027563))
* update Accordion story to include dynamic background color argument ([fa86914](https://github.com/ehsangazar/design-system/commit/fa86914ce81c6b4d3d4ca0cd6b8d3e90fbd349ba))

# [1.27.0](https://github.com/ehsangazar/design-system/compare/v1.26.0...v1.27.0) (2024-12-06)


### Features

* refactor Accordion component to remove CSS file and implement new structure with background color support ([3090eba](https://github.com/ehsangazar/design-system/commit/3090ebae8ec9a50cc21e715bf388e19723a529dc))
* update Accordion story to remove default args for cleaner configuration ([7764b16](https://github.com/ehsangazar/design-system/commit/7764b1661f0c0d403f82b27dda100372bf526d20))
* update Card component styles with new background and margin adjustments ([b327760](https://github.com/ehsangazar/design-system/commit/b32776029c42f6c16cb935e673ac1adeffecf56f))

# [1.26.0](https://github.com/ehsangazar/design-system/compare/v1.25.0...v1.26.0) (2024-12-06)


### Features

* implement CardsList container and update Card component for improved styling and functionality ([3f90820](https://github.com/ehsangazar/design-system/commit/3f9082067c84c7caf55dc735bf33324d729ba0d7))

# [1.25.0](https://github.com/ehsangazar/design-system/compare/v1.24.0...v1.25.0) (2024-12-06)


### Features

* set width to 100% for GazCard component ([f3c4f8e](https://github.com/ehsangazar/design-system/commit/f3c4f8e58edf1c5101acd3945cee69840a09b02a))

# [1.24.0](https://github.com/ehsangazar/design-system/compare/v1.23.0...v1.24.0) (2024-12-06)


### Features

* add hover effects and enable hover functionality for Card component ([24898d6](https://github.com/ehsangazar/design-system/commit/24898d6789d50b8690091209797b829f7abdb736))

# [1.23.0](https://github.com/ehsangazar/design-system/compare/v1.22.2...v1.23.0) (2024-12-06)


### Features

* add @emotion/react dependency to package.json and package-lock.json ([1dc11e2](https://github.com/ehsangazar/design-system/commit/1dc11e235468511dd152af116938b5e44a6d4112))
* add hover effect and sx prop support to Card component ([c321390](https://github.com/ehsangazar/design-system/commit/c3213903b58bd1a19aa5167d7c299a3f7a05d39b))
* integrate @emotion/styled for Card component styling ([ebbe3fd](https://github.com/ehsangazar/design-system/commit/ebbe3fdaa3698da3cd237b66b3267ef67ceb1033))

## [1.22.2](https://github.com/ehsangazar/design-system/compare/v1.22.1...v1.22.2) (2024-12-06)


### Bug Fixes

* update scrollbar colors in ThemeWrapper component ([e8b5c38](https://github.com/ehsangazar/design-system/commit/e8b5c38ad4b25121681effa5afd40b19c1b5c4a9))

## [1.22.1](https://github.com/ehsangazar/design-system/compare/v1.22.0...v1.22.1) (2024-12-06)


### Bug Fixes

* set default margin to 0 in Card component ([afebaa5](https://github.com/ehsangazar/design-system/commit/afebaa59397ea14e182a0155d772a1f305cfad33))

# [1.22.0](https://github.com/ehsangazar/design-system/compare/v1.21.1...v1.22.0) (2024-12-06)


### Bug Fixes

* add pointer cursor style to Button component ([0c91508](https://github.com/ehsangazar/design-system/commit/0c915084defa70e8f4cc789110859152edc0e52b))


### Features

* add global styles for custom scrollbar in ThemeWrapper component ([26b2ac6](https://github.com/ehsangazar/design-system/commit/26b2ac601eedbdb52d3cd896c501cad7d143dcd0))

## [1.21.1](https://github.com/ehsangazar/design-system/compare/v1.21.0...v1.21.1) (2024-12-06)


### Bug Fixes

* correct spelling of 'appearance' in Theme interface and update background colors in backgroundHandler utility ([d66bc89](https://github.com/ehsangazar/design-system/commit/d66bc89373d20d637db77ac58be439cf79e39749))

# [1.21.0](https://github.com/ehsangazar/design-system/compare/v1.20.0...v1.21.0) (2024-12-06)


### Features

* add background color support to Card component and implement backgroundHandler utility ([be24cfa](https://github.com/ehsangazar/design-system/commit/be24cfa98c45cf19f218b4bbbe5df8f03c0809c6))

# [1.20.0](https://github.com/ehsangazar/design-system/compare/v1.19.0...v1.20.0) (2024-12-05)


### Features

* remove unused CSS files and add borderRadiusHandler utility for image components ([65226fc](https://github.com/ehsangazar/design-system/commit/65226fcfdaa0bb2fc245a8552844649f9fcffa3a))

# [1.19.0](https://github.com/ehsangazar/design-system/compare/v1.18.0...v1.19.0) (2024-12-04)


### Features

* refactor Heading components to use HeadingProps for improved type safety ([f839ca7](https://github.com/ehsangazar/design-system/commit/f839ca70b9c9eb8ddea580cb5219e8bfedf837d4))

# [1.18.0](https://github.com/ehsangazar/design-system/compare/v1.17.0...v1.18.0) (2024-12-04)


### Features

* integrate ThemeContext for dynamic typography in Heading and Text components ([d1f3983](https://github.com/ehsangazar/design-system/commit/d1f39838ae89d27bfa403553b2dcdbc13dc3b70f))
* update ThemeWrapper and ThemeContext to use a more flexible typography structure ([9ded110](https://github.com/ehsangazar/design-system/commit/9ded110f9a861d0debc109f909e7f8c3b498f6b9))

# [1.17.0](https://github.com/ehsangazar/design-system/compare/v1.16.0...v1.17.0) (2024-12-04)


### Features

* update Grid component stories to use red Box elements and add new Heading components to index ([5d7c078](https://github.com/ehsangazar/design-system/commit/5d7c078ec7c26abcae5af6c381aa2009fe31410a))

# [1.16.0](https://github.com/ehsangazar/design-system/compare/v1.15.0...v1.16.0) (2024-12-04)


### Features

* add Heading components (H1-H6) and supporting elements (Paragraph, Small, Label) for enhanced typography ([58132f9](https://github.com/ehsangazar/design-system/commit/58132f9f6334d11f1eab49a36b1434e70491ac3e))

# [1.15.0](https://github.com/ehsangazar/design-system/compare/v1.14.0...v1.15.0) (2024-12-04)


### Features

* refactor Theme interface to use optional properties and improve type definitions ([fbf4ea6](https://github.com/ehsangazar/design-system/commit/fbf4ea67e954cd9a4ce1875b80c799c4f7e7d374))

# [1.14.0](https://github.com/ehsangazar/design-system/compare/v1.13.0...v1.14.0) (2024-12-04)


### Features

* remove Tailwind CSS integration and simplify Box, Flex, and Grid components ([350bcfc](https://github.com/ehsangazar/design-system/commit/350bcfc0aa65fe2c3b2a15cd9fac24609b04ed20))

# [1.13.0](https://github.com/ehsangazar/design-system/compare/v1.12.0...v1.13.0) (2024-12-04)


### Features

* enhance Box, Flex, and Grid components with custom styling props for improved layout control ([24125b1](https://github.com/ehsangazar/design-system/commit/24125b10e28522441ad9f45d4b92b3872b220e8c))

# [1.12.0](https://github.com/ehsangazar/design-system/compare/v1.11.0...v1.12.0) (2024-12-04)


### Features

* add size and rightIcon props to Button component for enhanced customization ([41a961d](https://github.com/ehsangazar/design-system/commit/41a961d70ee21c1f27000f2b1e1695423b05e8fe))
* enhance Button component with leftIcon and rightIcon props for improved customization ([e23d531](https://github.com/ehsangazar/design-system/commit/e23d531ff1ab7b643027f06e62855df8efa21dfb))
* update Button component size options and adjust story examples for better clarity ([3d18105](https://github.com/ehsangazar/design-system/commit/3d18105eb022e457ae01d3346ac4a934d80bbf8c))

# [1.11.0](https://github.com/ehsangazar/design-system/compare/v1.10.0...v1.11.0) (2024-12-04)


### Features

* update Button component to use Radix color scheme and apply teal color in App component ([5c8b192](https://github.com/ehsangazar/design-system/commit/5c8b1926354e4eee59b4a29604981295efac60e0))

# [1.10.0](https://github.com/ehsangazar/design-system/compare/v1.9.0...v1.10.0) (2024-12-03)


### Features

* enhance Button component with additional padding and margin props for improved layout control ([f0f690e](https://github.com/ehsangazar/design-system/commit/f0f690ee100d96bb946da498f159757e32945258))
* make padding prop optional in Button component for greater flexibility ([16dd010](https://github.com/ehsangazar/design-system/commit/16dd01045a165d520cb61fe044ddb09760670f9d))

# [1.9.0](https://github.com/ehsangazar/design-system/compare/v1.8.0...v1.9.0) (2024-12-03)


### Bug Fixes

* update package-lock.json to replace 'dev' with 'devOptional' for better clarity ([9923b35](https://github.com/ehsangazar/design-system/commit/9923b357c3e4c88d0803e41c159e7c142fc1c5e4))


### Features

* add new validation logic to the form component for improved user input handling ([9aa363f](https://github.com/ehsangazar/design-system/commit/9aa363f0bf889653791570db26fa686af72c6e42))
* update Button component to accept custom width prop and adjust imports ([e572e0d](https://github.com/ehsangazar/design-system/commit/e572e0d68d1b075bb70394eeaab1e1dcf195ff46))

# [1.8.0](https://github.com/ehsangazar/design-system/compare/v1.7.0...v1.8.0) (2024-12-03)


### Features

* integrate @ehsangazar/design-system and enhance Button component with custom props ([be1c6c6](https://github.com/ehsangazar/design-system/commit/be1c6c672b4d64b81dbcf940bc64d213b59e9d58))

# [1.7.0](https://github.com/ehsangazar/design-system/compare/v1.6.2...v1.7.0) (2024-12-02)


### Bug Fixes

* correct import paths in module files and improve build performance ([cb8c8e3](https://github.com/ehsangazar/design-system/commit/cb8c8e38bb655a3ca51f519c0362249adfd3c51e))
* standardize quotation marks and clean up eslint configuration ([9376cf0](https://github.com/ehsangazar/design-system/commit/9376cf02b5b296e2affad4bff990be7b02765ff2))
* update package.json main and module paths, and enhance Vite configuration with dts and cssnano plugins ([0e1afe6](https://github.com/ehsangazar/design-system/commit/0e1afe69811e83972ac5d6b0fdc8255eaea2b9f1))


### Features

* add Vite configuration for package build and include CSS in tsup entry ([15f3838](https://github.com/ehsangazar/design-system/commit/15f38387bda7dd2e5870aa1d8cbf6ba2aca612ce))

## [1.6.2](https://github.com/ehsangazar/design-system/compare/v1.6.1...v1.6.2) (2024-12-02)


### Bug Fixes

* restore Table and Tooltip exports in index.ts ([f6f326e](https://github.com/ehsangazar/design-system/commit/f6f326ea37e315f554b04be5e74342a47f59ba36))

## [1.6.1](https://github.com/ehsangazar/design-system/compare/v1.6.0...v1.6.1) (2024-12-02)


### Bug Fixes

* update main entry point to CommonJS and add UMD entry in package.json ([d935031](https://github.com/ehsangazar/design-system/commit/d93503121b77281059f84fa51950cc407b3df6f0))

# [1.6.0](https://github.com/ehsangazar/design-system/compare/v1.5.1...v1.6.0) (2024-12-02)


### Features

* add vite-plugin-css dependency and update Inset story props ([5a7b9f6](https://github.com/ehsangazar/design-system/commit/5a7b9f68b795e58cf66d93910200443813a66e86))

## [1.5.1](https://github.com/ehsangazar/design-system/compare/v1.5.0...v1.5.1) (2024-12-01)


### Bug Fixes

* update package configuration to use devOptional instead of dev and adjust TypeScript settings ([32b54d1](https://github.com/ehsangazar/design-system/commit/32b54d15560fe10d8873808adb5133313f6b8b64))

# [1.5.0](https://github.com/ehsangazar/design-system/compare/v1.4.0...v1.5.0) (2024-12-01)


### Features

* update package configuration with license, description, and new dependencies ([b38f8ec](https://github.com/ehsangazar/design-system/commit/b38f8ecd2f3905e0fc41dbc2d497b5a7aa7dcb99))

# [1.4.0](https://github.com/ehsangazar/design-system/compare/v1.3.0...v1.4.0) (2024-12-01)


### Bug Fixes

* restore @rollup/plugin-typescript in devDependencies and add rollup to dependencies ([668f91f](https://github.com/ehsangazar/design-system/commit/668f91fefabba7f1afdec5dc14955316fbc40e02))


### Features

* add Vite configuration for building the design system package ([8cb0ff2](https://github.com/ehsangazar/design-system/commit/8cb0ff2167f562dba30038986271a5934af1216b))

# [1.3.0](https://github.com/ehsangazar/design-system/compare/v1.2.0...v1.3.0) (2024-12-01)


### Features

* add React imports to components and stories ([788f889](https://github.com/ehsangazar/design-system/commit/788f8898ee9c03d2d6844899b0684d651988ba55))

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
