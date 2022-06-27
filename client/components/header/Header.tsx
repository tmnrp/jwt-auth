import { useRouter } from "next/router";
import { Anchor } from "../anchor/Anchor";
import { BtnSecondary } from "../buttons/BtnSecondary";
import { CONST_PAGES } from "../constants/pages";
import { PageWidthWrapper } from "../page-width-wrapper/PageWidthWrapper";

export const Header = () => {
  const router = useRouter();
  console.log("router.pathname", router.pathname);

  //
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
          <Anchor
            href="/"
            className="text-black tracking-widest uppercase font-extrabold text-xl"
          >
            <div>T.M.</div>
          </Anchor>

          <div className="space-x-5">
            <Anchor
              href={CONST_PAGES.contact.pathname}
              isActive={router.pathname === CONST_PAGES.contact.pathname}
            >
              Contact
            </Anchor>

            <Anchor
              href={CONST_PAGES.login.pathname}
              isActive={router.pathname === CONST_PAGES.login.pathname}
            >
              Login
            </Anchor>

            <Anchor href={CONST_PAGES.signup.pathname}>
              <BtnSecondary
                isActive={router.pathname === CONST_PAGES.signup.pathname}
              >
                Sign up
              </BtnSecondary>
            </Anchor>
          </div>
        </div>
      </PageWidthWrapper>
    </header>
  );
};
