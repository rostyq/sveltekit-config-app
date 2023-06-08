<script lang="ts">
    export let value: Side = "N";
</script>

<select bind:value={value}>
    <option value="N">None</option>
    <option value="L">Left</option>
    <option value="R">Right</option>
</select>