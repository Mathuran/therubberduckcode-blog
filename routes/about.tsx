import { Handlers } from "https://deno.land/x/fresh@1.1.5/server.ts";
import { useState } from "https://esm.sh/v116/preact@10.13.1/hooks/src/index";

export const handler: Handlers = {
    async GET(_, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hello");
        console.log(resp.headers);
        return resp;
    }
}


export default function AboutPage() {

    return (
        <main>
            <h1>About</h1>
            <p>This is the about page.</p>
        </main>
    );
}