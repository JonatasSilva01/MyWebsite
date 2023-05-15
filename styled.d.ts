import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      _default: string;
      _primary: strung;
      _secondary: string;
      _ligthColor: string;
      _darkColor: string;
    };
  }
}
