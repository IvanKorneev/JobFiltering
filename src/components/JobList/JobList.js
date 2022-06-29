const JobList = () => {
    return (
        <div className='job-list'>
            {data.map(item => (
                <JobPosition key={item.id} {...item} />
            ))}
        </div>
    )
}

export default JobList;