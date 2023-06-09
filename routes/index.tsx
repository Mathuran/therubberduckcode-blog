import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import SideMenu from "../islands/SideMenu.tsx";

export default function Home() {
  return (
    <div class="w-full p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Hello the RubberDuck Code Blog.
      </p>
      <Counter start={3} />
    </div>
    
  );
}
