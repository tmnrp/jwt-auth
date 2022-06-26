import { Anchor } from "../anchor/Anchor";
import { BtnSecondary } from "../buttons/BtnSecondary";
import { PageWidthWrapper } from "../page-width-wrapper/PageWidthWrapper";

export const Header = () => {
  return (
    <header
      className="
        h-[65px] sticky top-0 z-10
        border-b border-gray-200
        backdrop-blur-sm flex items-center
      "
    >
      <PageWidthWrapper>
        <div className="flex justify-between">
          <div className="tracking-widest uppercase font-extrabold text-xl">
            T.M.
          </div>

          <div className="space-x-5">
            <Anchor href="/contact">Contact</Anchor>
            <Anchor href="/login">Login</Anchor>
            <Anchor href="/signup">
              <BtnSecondary>Sign up</BtnSecondary>
            </Anchor>
          </div>
        </div>
      </PageWidthWrapper>
    </header>
  );
};
