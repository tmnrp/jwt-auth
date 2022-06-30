import { PageWrapper } from "../../components/page-wrapper/PageWrapper";
import { PageWidthWrapper } from "../../components/page-width-wrapper/PageWidthWrapper";
import { Input } from "../../components/input/Input";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";

const Login = () => {
  return (
    <PageWidthWrapper>
      <PageWrapper className="flex flex-col justify-center items-center">
        <div className="space-y-10">
          <div className="text-2xl font-extrabold tracking-widest uppercase">
            Log-in with credentials
          </div>

          <form className="space-y-2">
            <Input
              className="w-full"
              type="text"
              id="unm"
              name="unm"
              placeholder="Enter username"
            />

            <Input
              className="w-full"
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Enter password"
            />
          </form>

          <ButtonPrimary
            className={`
              py-4 w-full uppercase tracking-widest font-semibold
            `}
          >
            Login
          </ButtonPrimary>
        </div>
      </PageWrapper>
    </PageWidthWrapper>
  );
};

export default Login;
