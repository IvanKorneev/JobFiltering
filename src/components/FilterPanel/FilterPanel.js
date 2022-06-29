import Card from "../Card";
import Stack from "../Stack";
import Badge from "../Badge";

const FilterPanel = () => {
    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    <Badge variant="clearable">Frontend</Badge>
                    <Badge variant="clearable">Backend</Badge>
                    <Badge variant="clearable">React</Badge>
                </Stack>

                <button className='link'>Clear</button>
            </div>
        </Card>
    )
}

export default FilterPanel;