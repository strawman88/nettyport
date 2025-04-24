# [I] COMPLEX STYLING

## 1. MODULAR CSS with CSS MODULES

### A. OVERVIEW

**Technology:** [CSS Modules](https://glenmaddern.com/articles/css-modules)
  - Bundled with Vite `react-plugin`:  
  - Allows us to "modularise" our CSS & attach it directly to components that need the CSS

**Benefits of Modular SCSS:**
  - Retains separation of concerns between CSS & JSX
  - Allows for tight scoping of CSS class names
  - Encourages abstraction of React code into components & reusing declarative components
  - Very UNopinionated & simple 

**Arguments AGAINST CSS Modules**
  - Some developers argue it does not do much OR can be outdone by its "CSS-in-JS" equivalents like styled-components OR vanilla-extract
  - Transition from pure SCSS can feel weird at first -> transition from global scss to **part** global - **part** modular, class-based system

&nbsp;

### B SETUP OF CSS MODULES + SCSS

  - **0. No Installation needed:** CSS Modules is bundled automatically as part of `vite` -> [CSS Modules](https://vitejs.dev/guide/features#css-modules)

  - **1. Modularise `/components` & `/layout` scss:**

    - **FOCUS:** `Header.jsx` in the `/components/layout` directory

    - (i) Create a scss module in same directory: `Header.module.scss`

    - (ii) Import modular stylesheet into component: `import styles from './Header.module.scss';`

    - (iii) Write (copy) SCSS from global `/scss` folder for header into the modular scss file

    - (iv) Call the `className` value as a JSX object expression of `{styles}` where required to apply the SCSS correctly: `className={styles.navbar}`

    - **NOTE:** Check that each `module.scss` scss declarator is a className that can be referrenced directly (*no relying on implicit classNames provided by React-Bootstrap*)

  - **2. Retain remaining SCSS at GLOBAL level:**
    
    - The `/abstracts`, `/base`, `/pages` & `/vendors` code remains global (**NOTE - we moved `hero` & `notFound` to pages, as they are pages or page sections**)

    - Choice over whether `/pages` can be modularised (*in Next.js, it is preferred that `/pages` are kept at a global level*)

    - NOTE: Compiled CSS stylesheet only includes our `/base` & higher directories, whilst the `/abstracts` merely are used by global **AND** modular stylesheets!

&nbsp;

### C SPECIFIC EXAMPLES

  1. Adjusting from non-class selectors to className: `Footer.jsx`

  2. Modularisation encouraging refactoring JSX into components: `AbpButton.jsx`, `AccordionList` & `AccordionItem` (*these take practice & can be tricky - are included for advanced usage!*)

  3. Clearer break between components & "global" SCSS: `NotFound.jsx` & `Layout.jsx`

  - *NOTE: CSS Variables have been adjusted slightly to include some extra colors, mixins, functions & removing Bootstrap color example*