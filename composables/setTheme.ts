export type Theme = "light" | "dark";

export const setTheme = (theme: Theme) => {
   document.documentElement.setAttribute("data-theme", theme);
};
