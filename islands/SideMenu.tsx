import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/user.tsx";
import IconHome from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/home.tsx";
import IconPyramid from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/pyramid.tsx"

export default function SideMenu() {
  return (
    <div class="flex h-screen w-12 flex-col justify-between border-r bg-gray">
      <div>
        <CyberDuck />
        <Navbar />
      </div>
    </div>
  );
}

function CyberDuck() {
  return (
    <div class="inline-flex h-12 w-12 items-center justify-center">
      <span class="grid h-8 w-8 place-content-center rounded-lg bg-yellow-100 text-xs text-gray-600">
        <img
          src="/sunglasses-rubber-duck.webp"
          class="w-8 h-8 bg-gray"
          alt="A cool looking rubber duck with sunglasses on"
        />
      </span>
    </div>
  );
}

function Navbar() {
  return (
    <nav aria-label="Main Nav" class="flex flex-col p-2">
      <ul class="space-y-1 border-t border-gray-100 pt-4">
        <NavBarItem
          Icon={<IconHome class="h-4 w-4 opacity-75" />}
          hrefLabel="Home"
          hrefLink="/"
        />
        <NavBarItem
          Icon={<IconUser class="h-4 w-4 opacity-75" />}
          hrefLabel="About Me"
          hrefLink="/about"
        />
        <NavBarItem
          Icon={<IconPyramid class="h-4 w-4 opacity-75"/>}
          hrefLabel="Interview Prep"
          hrefLink="/interview-prep"
         />
      </ul>
    </nav>
  );
}

interface NavBarItemProps {
  Icon: preact.JSX.Element;
  hrefLabel: string;
  hrefLink: string;
}

function NavBarItem({ Icon, hrefLabel, hrefLink }: NavBarItemProps) {
  return (
    <li>
      <a
        href={hrefLink}
        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        {Icon}
        <span class="absolute left-full top-1/2 ml-4 w-max -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
          {hrefLabel}
        </span>
      </a>
    </li>
  );
}
