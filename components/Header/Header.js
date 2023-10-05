import { MainMenu } from "../MainMenu/MainMenu";

export const Header = ({ items, callToAction }) => {
  return (
    <header>
      <MainMenu items={items} callToAction={callToAction} />
    </header>
  );
};
