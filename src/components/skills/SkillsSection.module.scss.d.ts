export type Styles = {
  container: string;
  contentSection: string;
  invisibleButOutlineReadable: string;
  list: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
