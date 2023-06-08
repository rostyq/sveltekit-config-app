<script lang="ts">
    import { tick } from "svelte";
    import Config from "../lib/Config.svelte";

    let records: ConfigRecord[] = [];
    
    let href: string | null | undefined;
    let download: string = "config.txt";
    let link: HTMLAnchorElement;

    for (let index = 0; index < 9; index++) {
        records[index] = {
            index,
            toggle: false,
            altCode: false,
            ctrl: "N",
            alt: "N",
            shift: "N",
            win: "N",
            symbol: "",
        };
    }

    function serialize(record: ConfigRecord): string {
        let { index, ctrl, alt, shift, win, symbol } = record;
        let toggle = record.toggle ? "+" : "-";
        let altCode = record.altCode ? "+" : "-";

        return [
            index, toggle, altCode, ctrl, alt, shift, win, symbol
        ].join(",");
    }

    async function donwload() {
        if (href) {
            URL.revokeObjectURL(href);
        };

        let payload = records.map(r => serialize(r)).join("\n");
        let blob = new Blob([payload], { type: "text/txt" });

        href = URL.createObjectURL(blob);
        await tick();
        link.click();
    }
</script>

<div>
    <table>
        <tr class="row">
            <td class="col">index</td>
            <td class="col">toggle</td>
            <td class="col">alt-code</td>
            <td class="col">ctrl</td>
            <td class="col">alt</td>
            <td class="col">shift</td>
            <td class="col">win</td>
            <td class="col">symbol</td>
        </tr>
        {#each records as config (config.index)}
            <Config bind:config />
        {/each}
    </table>
</div>

<button type="button" on:click={donwload}>download</button>

<a {href} {download} bind:this={link} hidden>download</a>