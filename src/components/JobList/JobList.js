import JobPosition from "../JobPosition";
import {useDispatch, useSelector} from "react-redux";
import {selectAllPositions} from "../../store/positions/position-selectors";
import {addFilter} from "../../store/filters/filter-actions";


const JobList = () => {
    const positions = useSelector(selectAllPositions);
    const dispatch = useDispatch();
    const handelAddFilter = (filter) => {
        dispatch(addFilter(filter))
    };
    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition key={item.id} {...item} handelAddFilter={handelAddFilter} />
            ))}
        </div>
    )
}

export default JobList;