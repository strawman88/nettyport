# COMPLEX STYLING

## 2. THEMING (PERSONALISATION & CUSTOMISATION) with SASS

### 0. OVERVIEW

**Rationale:**

  - As discussed in the **React** class, programming in functionality that allows the user to personalise and automatically customise their application, improves the UX of the app!

  - Our focus will be to recap on & adapt the lightMode-darkMode theming used in React class BUT with SASS integration (*and some additional pointers!*)

&nbsp;

**Broad Steps for Programming in Customisable UI:**

  - A. Save the User Preference

  - B. Propagate the User Preference throughout the app (*state -> styles*)

  - (*EXTRA: Refactoring + Switch Options + Non-Modules*)

  - C. Allow app to persistently save the custom UI

&nbsp;

### A SAVE THE USER PREFERENCE

**GOAL:** We want to program the UI and the function that saves the user preference on toggle (i.e they want the `dark theme` in state)

  1. Import in our toggle button [here](https://www.npmjs.com/package/react-switch) (saves time on designing the toggle)

  2. Declare state & setter to store the theme state of the user, in `Layout.jsx`

  3. Create the `onChange` toggle function (`toggleTheme`) that will update state based on existing state (i.e. "if light, change to dark")

  4. Declare `checked` prop as being true when `dark` is true & `onChange` to **reference** the `toggleTheme` function

    NOTE: Be very careful HOW you refer to functions - there are THREE types  of ways which affect functionality of a click event: https://www.npmjs.com/package/react-switch

&nbsp;

### B PROPAGATION OF USER PERONSALISED UI (STATE)

**GOAL:** Program the app to change based on the recorded user preference, which is just contained in state

  - 1. Set the `app` id to the current value of the `theme` state

  - 2. Create new context with `createContext` which will store our `theme` state & `toggleTheme` function

  - 3. Wrap our `Layout.jsx` in the ThemeContext.Provider so every component can access the theme state and toggleTheme function (*now no longer need to pass things as props to child components*)

  - 4. **FOR EXAMPLE:** We can move the `<Switch />` logic to a reusable component called `ThemeToggler.jsx` and pair it with an `module.scss` file:

    - This allows us to expand on its styling later WITHOUT bloating the `Header.jsx` which will use it

    - (i) Import `useContext` hook & `ThemeContext` store

    - (ii) Access the theme context values & store in destructured variables - `theme` & `toggleTheme`

    - (iii) Use context values inside the toggle Switch, as proprs, to provide theme functionality

&nbsp;

### C. PROPAGATION OF PREFERRED THEME WITH SCSS & MODULES (STYLES)

**GOAL:** Update the LIGHT & DARK mode SASS/Modules styling changes to affect the preference consistently

With our theme so far, we can apply top-level global css as seen with our `.light` & `.dark` classes in `/base`.  We need to get this to FLOW DOWN our app to other components

  - **FOCUS**: `Header.jsx`, `AccordionItem` & `Footer.jsx`

  - 1. Create the `.light` & `.dark` selectors & their color settings in the `module.scss` file for each component

  - 2. Complete Steps 4(i)-(ii) above for each component - meaning they can access the `theme` value

  - 3. Using string interpolation & ternary, we can tell it to switch `className` selector based on the preferred theme: `${styles[theme]}`

  - **NOTE:** This process is a little more time-consuming, as we are using CSS Modules.  It means we cannot just apply an overarching `#id` to the theme, as components now ONLY draw from the modular classes (*compare with Dan*)

  - GLOBAL SASS: If you avoid CSS Modulars & use plain SCSS, it SHOULD be okay to use the `#id` aspect to apply changes