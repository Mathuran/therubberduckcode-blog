import { AppProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import SideMenu from "../islands/SideMenu.tsx";

export default function App({ Component }: AppProps) {
    return (
        <div class='columns-2 flex flex-row'>
            <SideMenu/>
            <Component/>
        </div>
    )
}