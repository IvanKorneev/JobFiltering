import TheHeader from "../Header";
import FilterPanel from "../FilterPanel";
import JobList from "../JobList";

const App = () => {
    return (
        <>
            <TheHeader/>
            <div className='container'>
                <FilterPanel/>
                <JobList/>
            </div>
        </>
    );
};

export default App;