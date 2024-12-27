import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

export default function Home() {
  return (
    <main className="px-6">
      <div className="mx-auto max-w-[600px] flex flex-col justify-center h-screen">
        <div className="text-8xl text-black dark:text-white">
          <Logo className="animate-blur-in" />
        </div>
        <section className="*:opacity-0 grid gap-2 pt-4">
          <h1 className="animate-blur-in animation-delay-200">
            The Everything Calculator
          </h1>
          <p className="animate-blur-in animation-delay-300">
            f6n is a calculator customizable calculator. You can store your
            equations and pass variable as inputs to calculate and get your
            output.
          </p>
          <form className="animate-blur-in animation-delay-400 pt-4 max-w-96">
            <fieldset className="flex items-center gap-1">
              <Button type="submit">Get Started</Button>
            </fieldset>
          </form>
        </section>
      </div>
    </main>
  );
}
