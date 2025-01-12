import {
  ShisaCreateEquation,
  ShisaFolder,
  ShisaGlobe,
  ShisaHistory,
  ShisaPercent,
  ShisaSearch,
  ShisaSmartphone,
} from "@/components/icons/Shisa";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import LandingVisual from "./landing-visual";

export default function Home() {
  return (
    <section className="px-6">
      <div className="wm-auto flex flex-col gap-24">
        <section className="grid gap-9 pt-24">
          <hgroup className="text-center">
            <h1 className="text-3xl">Plug, Calculate, Store & Share</h1>
            <h2>Create equations and pass inputs to calculate your output.</h2>
          </hgroup>
          <form className="mx-auto">
            <fieldset className="flex items-center gap-2">
              <Link href="/create/fx">
                <Button
                  type="button"
                  className="transition-transform active:scale-95"
                >
                  <ShisaCreateEquation />
                  Create Equation
                </Button>
              </Link>
              <Link
                href="/browse"
                className="transition-transform active:scale-95"
              >
                <Button type="button" variant={"secondary"}>
                  <ShisaSearch />
                  Browse Hence
                </Button>
              </Link>
            </fieldset>
          </form>
        </section>
        <LandingVisual />

        {/* See instant results tailored to your inputs. */}
        <section className="grid gap-3">
          <hgroup className="py-4 grid gap-1 *:p-0 *:m-0">
            <h1>Math functions and more...</h1>
            <p>
              Beyond the calculator, Hence is a platform for creating and
              sharing custom calculators.
            </p>
          </hgroup>
          <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-4">
            <li className="px-6 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl grid gap-1">
              <b className="flex gap-2 items-center text-black dark:text-white">
                <ShisaCreateEquation />
                <span>Compose</span>
              </b>
              <p>Design equations to fit your specific needs using LaTeX.</p>
            </li>
            <li className="px-6 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl grid gap-1">
              <b className="flex gap-2 items-center text-black dark:text-white">
                <ShisaFolder />
                <span>Folders & Tags</span>
              </b>
              <p>
                Organize equations by adding tags or putting them in folders.
              </p>
            </li>
            <li className="px-6 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl grid gap-1">
              <b className="flex gap-2 items-center text-black dark:text-white">
                <ShisaGlobe />
                <span>Share</span>
              </b>
              <p>
                Share and contribute to the growing library of calculators on
                Hence.
              </p>
            </li>
            <li className="px-6 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl grid gap-1">
              <b className="flex gap-2 items-center text-black dark:text-white">
                <ShisaHistory />
                <span>Version History</span>
              </b>
              <p>
                Keep track of changes made to your equations with version
                history.
              </p>
            </li>
            <li className="px-6 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl grid gap-1">
              <b className="flex gap-2 items-center text-black dark:text-white">
                <ShisaPercent />
                <span>Unit Conversion</span>
              </b>
              <p>
                Display answers in specified units and convert between them.
              </p>
            </li>
            <li className="px-6 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-2xl grid gap-1">
              <b className="flex gap-2 items-center text-black dark:text-white">
                <ShisaSmartphone />
                <span>Responsive</span>
              </b>
              <p>PWA ready, Hence is responsive and works on mobile.</p>
            </li>
          </ul>
          <div className="py-24">
            <Logo className="text-6xl text-black dark:text-white" />
            <h1 className="text-5xl">
              Like a calculator.
              <br />
              Unlike any calculator.
            </h1>
          </div>
        </section>
      </div>
    </section>
  );
}
