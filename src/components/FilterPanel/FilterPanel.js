import Card from "../Card";
import Stack from "../Stack";
import Badge from "../Badge";
import {useSelector} from "react-redux";
import {selectFilters} from "../../store/filters/filter-selectors";

const FilterPanel = () => {
    const currentFilters = useSelector(selectFilters);
    if (currentFilters.length === 0) {
        return null
    }
    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map(filter => (
                        <Badge key={filter} variant="clearable">{filter}</Badge>
                    ))}
                </Stack>

                <button className='link'>Clear</button>
            </div>
        </Card>
    )
}

export default FilterPanel;