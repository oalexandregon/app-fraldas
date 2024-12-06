import { useEffect } from "react";
import { Button, DateTimePicker, Grid, TextField } from "..";
import { handleInputChange, selectItem } from "../../utils/action";
import { adjustDateTimeForTimezone } from "../../utils/core";

const Diaper = ({ data, setData, translate }) => {
    useEffect(() => {
        setData({ ...data, 'action_type': 3 })
    }, [])

    return <Grid container={true} spacing={2} sx={{ display: "flex", justifyContent: 'center' }}>
        <Grid item={true} size={{ xs: 12 }} sx={{ width: "clamp(100px, 80vw, 500px)" }}>
            <DateTimePicker
                value={data?.start_date ? adjustDateTimeForTimezone(data?.start_date) : null}
                label={translate("data-hour-start")}
                name="start_date"
                fullWidth={true}
                ampm={false}
                format="DD/MM/YYYY HH:mm"
                onChange={(value) => { handleInputChange('start_date', new Date(value.toString()), data, setData) }}
            />
        </Grid>
        <Grid item={true} size={{ xs: 12 }} sx={{ width: "clamp(100px, 80vw, 500px)" }}>
            <Button variant='contained' color={data.type === 1 ? "secondary" : "primary"} onClick={() => { selectItem(1, "type", data, setData) }}>{translate("diaper-wet")}</Button>
            <Button variant='contained' color={data.type === 2 ? "secondary" : "primary"} onClick={() => { selectItem(2, "type", data, setData) }}>{translate("diaper-dirty")}</Button>
            <Button variant='contained' color={data.type === 3 ? "secondary" : "primary"} onClick={() => { selectItem(3, "type", data, setData) }}>{translate("diaper-both")}</Button>
            <Button variant='contained' color={data.type === 4 ? "secondary" : "primary"} onClick={() => { selectItem(4, "type", data, setData) }}>{translate("diaper-clean")}</Button>
        </Grid>
        <Grid item={true} size={{ xs: 12 }} sx={{ width: "clamp(100px, 80vw, 500px)" }}>
            <TextField
                value={data?.observation ? data.observation : ""}
                label={translate("observation")}
                onChange={(event) => { handleInputChange('observation', event.target.value, data, setData) }}
                name="observation"
                rows={6}
                fullWidth={true}
                multiline={true} />
        </Grid>
    </Grid>
}

export default Diaper;