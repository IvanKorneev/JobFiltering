import Card from "../Card";
import Stack from "../Stack";
import Badge from "../Badge";
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "../../store/filters/filter-selectors";
import {clearFilter} from "../../store/filters/filter-actions";

const FilterPanel = () => {
    const currentFilters = useSelector(selectFilters);
    const dispatch = useDispatch();
    const handlerClearFilter = () => {
        dispatch(clearFilter)
    }
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

                <button onClick={handlerClearFilter} className='link'>Clear</button>
            </div>
        </Card>
    )
}

export default FilterPanel;