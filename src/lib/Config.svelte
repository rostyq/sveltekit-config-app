<script lang="ts">
    import Select from "./Select.svelte";

    export let config: ConfigRecord;
</script>


<tr class="row">
    <td class="col">
        {config.index}
    </td>

    <td class="col">
        <input type="checkbox" bind:checked={config.toggle}>
    </td>

    <td class="col">
        <input type="checkbox" bind:checked={config.altCode}>
    </td>

    <td class="col">
        <Select bind:value={config.ctrl} />
    </td>

    <td class="col">
        <Select bind:value={config.alt} />
    </td>
    
    <td class="col">
        <Select bind:value={config.shift} />
    </td>

    <td class="col">
        <Select bind:value={config.win} />
    </td>

    <td class="col">
        <input type="text" bind:value={config.symbol} maxlength={config.altCode ? 4 : 1} size=4>
    </td>
</tr>