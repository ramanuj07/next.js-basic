import Button from "./ui/Button";
import { LabelledInput } from "./ui/LabelledInput";

export function Signin() {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign in</div>
            </div>
            <div className="pt-2">
              <LabelledInput label="Username" placeholder="ramanuj@gmail.com" />
              <LabelledInput
                label="Password"
                type={"password"}
                placeholder="123456"
              />
              {<Button label="Sign in" />}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
